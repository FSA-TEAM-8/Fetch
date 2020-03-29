import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../store'

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const isLoggedIn = useSelector(state => !!state.user._id)

  const handleClick = () => dispatch(logout())

  return (
    <div className="header">
      <img src="img/logo2.png" className="logo" />
      <div className="sub-header">
        <div className="dropbtn">
          <a href="/home">Home</a>
        </div>
        {/* jobs nav dropdown */}
        <div className="dropdown">
          <div className="dropbtn">Jobs</div>
          <div className="dropdown-content">
            <a href="/jobs">View Job Listings</a>
          </div>
        </div>
        {/* companies nav dropdown */}
        <div className="dropdown">
          <div className="dropbtn">Companies</div>
          <div className="dropdown-content">
            <a href="/companies">View All Companies</a>
          </div>
        </div>
        {/* check log in status */}
        {isLoggedIn ? (
          <div className="dropbtn">
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div className="dropbtn">
            <a href="/login">Login</a>
          </div>
        )}
        {/* separated from above because of it will be treated as under one div element and spacing will be off*/}
        {isLoggedIn ? null : (
          <div className="dropbtn">
            <a href="/signup">Sign Up</a>
          </div>
        )}
        {/* check for admin or employer */}
        {user.isAdmin ? (
          <div className="admin">
            <div className="dropdown">
              <div className="dropbtn">Admin</div>
              <div className="dropdown-content">
                <a href="/candidates">Browse Jobseekers</a>
                <a href="/addCompany">Add New Company</a>
                <a href="/addJob">Add New Job</a>
                <a href="/users/employers">View All Registered Employers</a>
                <a href="/users">View All Registered Users</a>
              </div>
            </div>
          </div>
        ) : null}
        {!user.isAdmin && user.isEmployer ? (
          <div className="employer">
            <div className="dropdown">
              <div className="dropbtn">Employer</div>
              <div className="dropdown-content">
                <a href="/candidates">Browse Jobseekers</a>
                <a href="/addCompany">Add New Company</a>
                <a href="/addJob">Add New Job</a>
              </div>
            </div>
          </div>
        ) : null}
        {/* check if logged in for profile */}
        {isLoggedIn ? (
          <div className="dropbtn">
            <a href={`/myprofile/${user._id}`} style={{whiteSpace: 'nowrap'}}>
              My Profile
            </a>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Header

{
  /* check log in status */
}
{
  /* <div>
{isLoggedIn ?
(<a href="#" onClick={handleClick}>
      Logout
</a>) : (
  <a href="/login">
    Login
  </a>
)}
</div>
{/* separated from above because of it will be treated as under one div element */
}
{
  /* <div>
{isLoggedIn ?
null : (<a href="/signup">
    Sign Up
  </a>
)}
</div> */
}
