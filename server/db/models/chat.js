const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  channelid: {
    type: String,
    require: true
    // id:{
    //   type: String,
    // },
    // participants: {
    //   sender: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //   },
    //   receiver: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //   }
    // }
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
  // date: {
  //   type: Date,
  //   default: new Date()
  // }
})

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat
