const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    require: true
  },
  salary: {
    type: Number
  },
  description: {
    contactEmail: {
      type: String,
      require: true
    },
    location: {
      type: String,
      require: true
    },
    datePosted: {
      type: new Date()
    },
    roleType: {
      type: String
    },
    experienceLevel: {
      type: String
    }
  }
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job
