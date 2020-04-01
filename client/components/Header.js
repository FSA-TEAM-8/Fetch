import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../store'
import {Link} from 'react-router-dom'

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const isLoggedIn = useSelector(state => !!state.user._id)

  const handleClick = () => dispatch(logout())

  return (
    <div className="header">
      <Link to="/home">
        <img src="img/logo2.png" className="logo" />{' '}
      </Link>

      <div className="sub-header">
        <Link to="/home" className="dropbtn">
          Home
        </Link>
        <Link to="/chat/channel" className="dropbtn">
          Chat
        </Link>
        {/* jobs nav dropdown */}
        <div className="dropdown">
          <div className="dropbtn">Jobs</div>
          <div className="dropdown-content">
            <Link to="/jobs">View Job Listings</Link>
          </div>
        </div>
        {/* companies nav dropdown */}
        <div className="dropdown">
          <div className="dropbtn">Companies</div>
          <div className="dropdown-content">
            <Link to="/companies">View All Companies</Link>
          </div>
        </div>
        {/* check log in status */}
        {isLoggedIn ? (
          <div className="dropbtn">
            <Link to="#" onClick={handleClick}>
              Logout
            </Link>
          </div>
        ) : (
          <div className="dropbtn">
            <Link to="/login">Login</Link>
          </div>
        )}
        {/* separated from above because of it will be treated as under one div element and spacing will be off*/}
        {isLoggedIn ? null : (
          <div className="dropbtn" style={{whiteSpace: 'nowrap'}}>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
        {/* check for admin or employer */}
        {user.isAdmin ? (
          <div className="admin">
            <div className="dropdown">
              <div className="dropbtn">Admin</div>
              <div className="dropdown-content">
                <Link to="/candidates">Browse Jobseekers</Link>
                <Link to="/addCompany">Add New Company</Link>
                <Link to="/addJob">Add New Job</Link>
                <Link to="/users/employers">View All Registered Employers</Link>
                <Link to="/users">View All Registered Users</Link>
              </div>
            </div>
          </div>
        ) : null}
        {!user.isAdmin && user.isEmployer ? (
          <div className="employer">
            <div className="dropdown">
              <div className="dropbtn">Employer</div>
              <div className="dropdown-content">
                <Link to="/candidates">Browse Jobseekers</Link>
                <Link to="/addCompany">Add New Company</Link>
                <Link to="/addJob">Add New Job</Link>
              </div>
            </div>
          </div>
        ) : null}
        {/* check if logged in for profile */}
        {isLoggedIn ? (
          <div className="dropbtn">
            <Link to={`/myprofile/${user._id}`} style={{whiteSpace: 'nowrap'}}>
              My Profile
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Header
