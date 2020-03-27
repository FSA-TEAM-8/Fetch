const path = require('path')
const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const session = require('express-session')
const passport = require('passport')
const fileUpload = require('express-fileupload')
const cors = require('cors')

// const SequelizeStore = require('connect-session-sequelize')(session.Store)
// const db = require('./db')
// const sessionStore = new SequelizeStore({db})

const PORT = process.env.PORT || 8080
const app = express()
const socketio = require('socket.io')
module.exports = app

const {User} = require('./db/models')
const dotenv = require('dotenv').config()
const db = require('../server/db')

// setting up session for mongoDb
const MongoStore = require('connect-mongo')(session)
const sessionStore = new MongoStore({mongooseConnection: db})

// const mongoose = require('mongoose')
// const {mongoURI} = require('../secrets')

// // database config
// mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
// const db = mongoose.connection
// db.on('error', error => console.error(error))
// db.once('open', () => console.log('mongo database connected'))

// This is a global Mocha hook, used for resource cleanup.
// Otherwise, Mocha v4+ never quits after tests.
if (process.env.NODE_ENV === 'test') {
  after('close the session store', () => sessionStore.stopExpiringSessions())
}

/**
 * In your development environment, you can keep all of your
 * app's secret API keys in a file called `secrets.js`, in your project
 * root. This file is included in the .gitignore - it will NOT be tracked
 * or show up on Github. On your production server, you can add these
 * keys as environment variables, so that they can still be read by the
 * Node process on process.env
 */
if (process.env.NODE_ENV !== 'production') require('../secrets')

// passport registration
passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})

const createApp = () => {
  // logging middleware
  app.use(morgan('dev'))

  // body parsing middleware
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))

  // compression middleware
  app.use(compression())
  app.use(cors())

  // session middleware with passport
  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'my best friend is Cody',
      store: sessionStore,
      resave: false,
      saveUninitialized: false
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())

  app.use(fileUpload())

  // auth and api routes
  app.use('/auth', require('./auth'))
  app.use('/api', require('./api'))

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')))

  app.post('/upload', (req, res, next) => {
    let newFile = req.files.file
    console.log(req)
    console.log('Received file!')

    newFile.mv(`./server/uploads/${req.user.lastName}resume.pdf`, function(
      err
    ) {
      if (err) {
        return res.status(500).send(err)
      }

      res.json({file: `../uploads/${req.user.lastName}resume.pdf`})
    })
  })

  app.use('/download', function(req, res) {
    console.log(__dirname)
    const file = path.join(
      __dirname,
      `./uploads/${req.user.lastName}resume.pdf`
    )
    res.download(file) // Set disposition and send it.
  })

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  )

  // set up our socket control center
  const io = socketio(server)
  require('./socket')(io)
}

async function bootApp() {
  await sessionStore
  await db
  await createApp()
  await startListening()
}
// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  bootApp()
} else {
  createApp()
}
