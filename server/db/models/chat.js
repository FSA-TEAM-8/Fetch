const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatSchema = new Schema({
  content: {
    type: String
    // required: true
    // commented above because when creating new channel content would be required
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
    type: String
  }
})

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat
