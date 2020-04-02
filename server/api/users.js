const router = require('express').Router()
const {User} = require('../db/models')
const {validateAdmin, validateUser} = require('../middleware')

module.exports = router

router.get('/employers', validateAdmin, async (req, res, next) => {
  try {
    const employers = await User.find({
      isEmployer: true
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      // attributes: ['id', 'email']
    }).populate('company')
    res.json(employers)
  } catch (err) {
    next(err)
  }
})

router.get('/candidates', validateUser, async (req, res, next) => {
  try {
    const employers = await User.find({
      isCandidate: true
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      // attributes: ['id', 'email']
    })
    res.json(employers)
  } catch (err) {
    next(err)
  }
})

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
    const singleUser = await User.findById({_id: req.params.id}).populate(
      'jobHistory'
    )
    res.json(singleUser)
  } catch (err) {
    next(err)
  }
})

router.post('/upload', async (req, res, next) => {
  console.log('File received', req.files)
  let newFile = req.files.resume
  let newFileName = req.files.resume.name

  // newFile.mv(`/server/uploads/${newFileName}`, function(
  //   err
  // ) {
  //   if (err) {
  //     return res.status(500).send(err)
  //   }
  // })

  try {
    newFile.mv(`server/uploads/${newFileName}`, function(err) {
      if (err) {
        console.error(err)
      }
    })

    const updatedUser = await User.findOneAndUpdate(
      {
        _id: req.user._id
      },
      {
        resume: `${newFileName}`
      },
      {
        new: true
      }
    )
    res.json(updatedUser)
  } catch (error) {
    next(error)
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
    res.json(updatedUser)
  } catch (error) {
    next(error)
  }
})
