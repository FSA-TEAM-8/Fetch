const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment-timezone')
const dateNewYork = moment.tz(Date.now(), 'America/New_York')

const chatSchema = new Schema({
  content: {
    type: String
  },
  channel: {
    id: {
      type: String
    },
    name: {
      type: String
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    }
  },
  datePosted: {
    type: String,
    default: dateNewYork
  }
})

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat
