const mongoose = require('mongoose')
const {mongoURI} = require('../../secrets')

// database config
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('mongo database connected'))

module.exports = db
