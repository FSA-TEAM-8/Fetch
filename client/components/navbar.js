import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, user}) => (
  <div>
    <img src="img/logo2.png" className="logo" />
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/jobs">Jobs</Link>
          <Link to="/companies">Companies</Link>
          <Link to={`/myprofile/${user._id}`}>My Profile</Link>
          {user !== undefined && user.isAdmin ? (
            <div>
              <Link to="/users/employers">All Registered Employers</Link>
              <Link to="/users">All Registered Users</Link>
            </div>
          ) : null}
          {user !== undefined && user.isEmployer ? (
            <div>
              <Link to="/jobs">Browse Jobseekers</Link>
              <Link to="/addCompany">Add Company</Link>
              <Link to="/jobs/addJob">Add a New Job</Link>
            </div>
          ) : null}
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/jobs">Jobs</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user._id,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
