const router = require('express').Router()
const {User} = require('../db/models')
const {validateAdmin, validateUser} = require('../middleware')

module.exports = router

router.get('/', validateAdmin, async (req, res, next) => {
  try {
    const users = await User.find({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      // attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', validateUser, async (req, res, next) => {
  try {
    const singleUser = await User.findById({_id: req.params.id})
    res.json(singleUser)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.json(newUser)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      {
        _id: req.params.id
      },
      {
        $set: req.body
      },
      {
        new: true
      }
    )
    console.log('UPDATEDUSER', updatedUser)
    res.json(updatedUser)
  } catch (error) {
    next(error)
  }
})
