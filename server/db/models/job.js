const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
  title: {
    type: String
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
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
      type: String
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
