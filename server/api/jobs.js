const router = require('express').Router()
const {Job} = require('../db/models')
module.exports = router

// find all jobs
router.get('/', async (req, res, next) => {
  try {
    const jobs = await Job.find({})
    res.json(jobs)
  } catch (error) {
    next(error)
  }
})

// find one Job via id
router.get('/:id', async (req, res, next) => {
  try {
    const singleJob = await Job.findById({_id: req.params.id})
    res.json(singleJob)
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
    const updatedJob = await Job.findOneAndUpdate(
      {
        _id: req.params.id //  search for job
      },
      {
        $set: req.body // fields to update
      }
    )
    res.json(updatedJob)
  } catch (error) {
    next(error)
  }
})
