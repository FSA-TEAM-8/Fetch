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
  } catch (err) {
    next(err)
  }
})
