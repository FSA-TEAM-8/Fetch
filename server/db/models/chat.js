const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

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
    },
    image: {
      type: String
    }
  },
  datePosted: {
    type: String,
    default: moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')
  }
})

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat
