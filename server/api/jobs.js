const router = require('express').Router()
const {Job} = require('../db/models')
module.exports = router

// find all jobs

router.get('/search', async (req, res, next) => {
  try {
    const jobs = await Job.find(
      {
        $text: {
          $search: req.query.title,
          $caseSensitive: false
        },
        location: req.query.location
      },
      {score: {$meta: 'textScore'}}
    ).sort({score: {$meta: 'textScore'}})
    res.json(jobs)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const singleJob = await Job.findById({_id: req.params.id}).populate(
      'appliedCandidates'
    )
    res.json(singleJob)
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const jobs = await Job.find({})
    res.json(jobs)
  } catch (error) {
    next(error)
  }
})

// add a job
router.post('/', async (req, res, next) => {
  try {
    const newJob = await Job.create(req.body)
    res.json(newJob)
  } catch (error) {
    next(error)
  }
})

// update a job
router.put('/:id', async (req, res, next) => {
  try {
    console.log('req,body', req.body)
    const updatedJob = await Job.findOneAndUpdate(
      {
        _id: req.params.id //  search for job
      },
      {
        $set: req.body // fields to update
      },
      {
        new: true // need to pass this as argu to return updated document
      }
    )
    console.log('updatedJob in server', updatedJob)
    res.json(updatedJob)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const savedJobs = await Job.find({
      _id: {
        $in: req.body
      }
    })
    res.json(savedJobs)
  } catch (error) {
    next(error)
  }
})

router.post('/upload', async (req, res, next) => {
  console.log('File received', req.files)
  let newFile = req.files.resume
  let newFileName = req.files.resume.name
  try {
    newFile.mv(`/server/uploads/${newFileName}`, function(err) {
      if (err) {
        return res.status(500).send(err)
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
