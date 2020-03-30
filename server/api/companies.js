const router = require('express').Router()
const {Company} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const companies = await Company.find()
    res.json(companies)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const foundCompany = await Company.findById({_id: req.params.id}).populate(
      'jobPostedHistory'
    )
    res.json(foundCompany)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  console.log('REQ>BODY B4 TRY', req.body)
  try {
    const newCompany = await Company.create(req.body)
    console.log(req.body)
    res.json(newCompany)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const updatedCompany = await Company.findOneAndUpdate(
      {
        _id: req.params.id //  search for company
      },
      {
        $set: req.body // fields to update
      },
      {
        new: true
      }
    )
    res.json(updatedCompany)
  } catch (error) {
    next(error)
  }
})
