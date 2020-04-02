const crypto = require('crypto')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create schema
const userSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  biography: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  streetNumber: {
    type: Number
  },
  streetName: {
    type: String
  },
  townName: {
    type: String
  },
  stateName: {
    type: String
  },
  zipCode: {
    type: Number
  },
  resume: {
    type: String
  },
  image: {
    type: String,
    default: '/img/default-user.png'
  },
  linkedInId: {
    type: Object
  },
  googleId: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  isEmployer: {
    type: Boolean,
    default: false
  },
  isCandidate: {
    type: Boolean,
    default: false
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  },
  jobHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job'
    }
  ],
  savedJobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job'
    }
  ],
  technicalSkills: [
    {
      type: String
    }
  ],
  achievements: [
    {
      type: String
    }
  ]
})

const User = mongoose.model('User', userSchema)

module.exports = User

/**
 * instanceMethods
 */

// userSchema.methods.correctPassword = function(candidatePwd) {
//   return User.encryptPassword(candidatePwd, this.salt()) === this.password()
// }

// /**
//  * classMethods
//  */
// userSchema.statics.generateSalt = function() {
//   return crypto.randomBytes(16).toString('base64')
// }

// userSchema.statics.encryptPassword = function(plainText, salt) {
//   return crypto
//     .createHash('RSA-SHA256')
//     .update(plainText)
//     .update(salt)
//     .digest('hex')
// }

// /**
//  * hooks
//  */
// const setSaltAndPassword = user => {
//   if (user.changed('password')) {
//     user.salt = userSchema.generateSalt()
//     user.password = userSchema.encryptPassword(user.password(), user.salt())
//   }
// }
// userSchema.pre('save', setSaltAndPassword)

// BELOW IS ALL SEQUELIZE -------------------------------

// const Sequelize = require('sequelize')
// const db = require('../db')

// const User = db.define('user', {
//   email: {
//     type: Sequelize.STRING,
//     unique: true,
//     allowNull: false
//   },
//   password: {
//     type: Sequelize.STRING,
//     // Making `.password` act like a func hides it when serializing to JSON.
//     // This is a hack to get around Sequelize's lack of a "private" option.
//     get() {
//       return () => this.getDataValue('password')
//     }
//   },
//   salt: {
//     type: Sequelize.STRING,
//     // Making `.salt` act like a function hides it when serializing to JSON.
//     // This is a hack to get around Sequelize's lack of a "private" option.
//     get() {
//       return () => this.getDataValue('salt')
//     }
//   },
//   googleId: {
//     type: Sequelize.STRING
//   }
// })

// module.exports = User

// /**
//  * instanceMethods
//  */
// User.prototype.correctPassword = function(candidatePwd) {
//   return User.encryptPassword(candidatePwd, this.salt()) === this.password()
// }

// /**
//  * classMethods
//  */

// User.generateSalt = function() {
//   return crypto.randomBytes(16).toString('base64')
// }

// User.encryptPassword = function(plainText, salt) {
//   return crypto
//     .createHash('RSA-SHA256')
//     .update(plainText)
//     .update(salt)
//     .digest('hex')
// }

// /**
//  * hooks
//  */
// const setSaltAndPassword = user => {
//   if (user.changed('password')) {
//     user.salt = User.generateSalt()
//     user.password = User.encryptPassword(user.password(), user.salt())
//   }
// }

// User.beforeCreate(setSaltAndPassword)
// User.beforeUpdate(setSaltAndPassword)
// User.beforeBulkCreate(users => {
//   users.forEach(setSaltAndPassword)
// })
