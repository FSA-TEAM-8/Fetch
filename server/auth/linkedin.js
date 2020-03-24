const passport = require('passport')
const router = require('express').Router()
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy
const {User} = require('../db/models')
module.exports = router

/**
 * For OAuth keys and other secrets, your Node process will search
 * process.env to find environment variables. On your production server,
 * you will be able to set these environment variables with the appropriate
 * values. In development, a good practice is to keep a separate file with
 * these secrets that you only share with your team - it should NOT be tracked
 * by git! In this case, you may use a file called `secrets.js`, which will
 * set these environment variables like so:
 *
 * process.env.LINKEDIN_CLIENT_ID = 'your linkedin client id'
 * process.env.LINKEDIN_CLIENT_SECRET = 'your linkedin client secret'
 * process.env.LINKEDIN_CALLBACK = '/your/linkedin/callback'
 */

passport.use(
  new LinkedInStrategy(
    {
      clientID: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      callbackURL: process.env.LINKEDIN_CALLBACK,
      scope: ['r_emailaddress', 'r_liteprofile']
    },
    function(accessToken, refreshToken, profile, done) {
      //check user table for the id if it exists
      User.findOne(
        {
          linkedInId: profile.id
        },
        function(err, user) {
          if (err) {
            console.log('Error finding user', err)
            return done(err)
          }
          //No user was found... so create a new user with values from LinkedIn (all the profile. stuff)
          if (!user) {
            user = new User({
              linkedInId: profile.id,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              email: profile.emails[0].value,
              username: profile.username,
              imageUrl: profile.photos[0].value
              //now in the future searching on User.findOne({'linkedInId': profile.id } will match because of this next line
            })
            user.save(function(error) {
              if (error) console.log('Error creating user', error)
              return done(error, user)
            })
          } else {
            //found user. Return
            return done(err, user)
          }
        }
      )
    }
  )
)

router.get(
  '/',
  passport.authenticate('linkedin', {
    scope: ['r_emailaddress', 'r_liteprofile']
  }),
  function(req, res) {
    // The request will be redirected to LinkedIn for authentication, so this // function will not be called.
  }
)

router.get(
  '/callback',
  passport.authenticate('linkedin', {
    successRedirect: '/home',
    failureRedirect: '/login'
  })
)
