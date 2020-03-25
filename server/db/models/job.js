const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  salary: {
    type: Number
  },
  availibilty: {
    type: Boolean,
    default: true
  },
  contactEmail: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  datePosted: {
    type: Date,
    default: Date.now()
  },
  roleType: {
    type: String
  },
  experienceLevel: {
    type: String
  }
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job
