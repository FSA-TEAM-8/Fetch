const router = require('express').Router()
const {Chat} = require('../db/models')
module.exports = router

// GET /api/chat
router.get('/', async (req, res, next) => {
  try {
    const chats = await Chat.find()
    res.json(chats)
  } catch (error) {
    next(error)
  }
})

router.get('/:channel', async (req, res, next) => {
  try {
    const channel = req.params.channel
    const content = await Chat.find({channel})
    res.json(content)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newChat = await Chat.create(req.body)
    console.log('NEWCHAT', newChat)
    res.json(newChat)
  } catch (error) {
    next(error)
  }
})
