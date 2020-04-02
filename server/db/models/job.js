const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment-timezone')
const dateNewYork = moment.tz(Date.now(), 'America/New_York')

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
    default: dateNewYork
  },
  roleType: {
    type: String
  },
  experienceLevel: {
    type: String
  },
  appliedCandidates: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
})

const index = {title: 'text', location: 'text', experienceLevel: 'text'}
jobSchema.index(index)

const Job = mongoose.model('Job', jobSchema)

module.exports = Job
