const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema({
  companyName: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  jobRole: {
    type: String,
    required: true
  },
  reviews: [
    {
      type: String
    }
  ],
  imageURL: {
    type: String
  },
  employees: [{type: Schema.Types.ObjectId, ref: 'User'}]
})

const Company = mongoose.model('Company', companySchema)

module.exports = Company
