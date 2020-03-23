const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema({
  companyName: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  reviews: [
    {
      type: String
    }
  ],
  imageURL: {
    type: String
  },
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  jobPostedHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job'
    }
  ]
})

const Company = mongoose.model('Company', companySchema)

module.exports = Company
