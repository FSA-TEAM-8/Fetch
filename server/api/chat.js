const router = require('express').Router()
const {Chat} = require('../db/models')
module.exports = router

// GET /api/chat
router.get('/messages', async (req, res, next) => {
  try {
    const chats = await Chat.find() //.populate('author')
    res.json(chats)
  } catch (error) {
    next(error)
  }
})

router.post('/messages', async (req, res, next) => {
  try {
    const newChat = await Chat.create(req.body)
    res.json(newChat)
  } catch (error) {
    next(error)
  }
})

// routes for channels
router.get('/channels', async (req, res, next) => {
  try {
    const channels = await Chat.find()
    res.json(channels)
  } catch (error) {
    next(error)
  }
})

router.post('/channels', async (req, res, next) => {
  try {
    const newChannel = await Chat.create({channel: req.body})
    res.json(newChannel)
  } catch (error) {
    next(error)
  }
})

// GET finds content from specfic channel
router.get('/channels/:channelId', async (req, res, next) => {
  try {
    const channelId = req.params.channelId
    const channel = await Chat.findOne({'channel.id': channelId}).select(
      'channel'
    ) // not working as intended with distinct
    res.json(channel)
  } catch (error) {
    next(error)
  }
})
