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
    let companyId = req.params.id
    const foundCompany = await Company.find(companyId)
    res.json(foundCompany)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newCompany = await Company.create(req.body)
    res.json(newCompany)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const updatedCompany = await Company.findOneAndUpdate(
      {
        _id: req.params.id
      },
      {
        $set: req.body
      }
    )
    res.json(updatedCompany)
  } catch (error) {
    next(error)
  }
})
