import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div className="auth-form">
      <form onSubmit={handleSubmit} name={name}>
        <div className="signIn-inputs">
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" className="authInput" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" className="authInput" />
        </div>
        <div>
          <Button type="submit" variant="contained" color="primary">
            {displayName}
          </Button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <div className="oauth-inputs">
        <div id="oauth-linkedin">
          <div>
            {' '}
            <a href="/auth/linkedin">{displayName} with Linkedin</a>{' '}
          </div>
          <div>
            <a href="/auth/linkedin">
              <img
                src="/img/Sign-In-Small---Active.png"
                className="logo-login"
              />
            </a>
          </div>
        </div>
        <div id="oauth-google">
          <div>
            {' '}
            <a href="/auth/google">{displayName} with Google</a>{' '}
          </div>
          <div>
            <a href="/auth/google">
              <img src="/img/4LSMF.png" className="logo-login" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
