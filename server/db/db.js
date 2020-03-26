// below is in server/index.js

const mongoose = require('mongoose')
const {mongoURI} = require('../../secrets')

// database config
mongoose.connect(process.env.mongoURI || mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('mongo database connected'))

module.exports = db
