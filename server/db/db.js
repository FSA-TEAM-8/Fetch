// below is in server/index.js

const mongoose = require('mongoose')
require('dotenv').config()
// const {mongoURI} = require('../../secrets')
// console.log('MONGO', process.env.mongoURI)
const mongoURI = process.env.mongoURI
// console.log('MongoURI', mongoURI)

// database config
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('mongo database connected'))

module.exports = db
