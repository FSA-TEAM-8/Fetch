/* eslint-disable no-return-assign */
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getSingleUser} from '../../store/single-user'
import {Link} from 'react-router-dom'
import SavedJobs from '../Jobs/SavedJobs'
import AppliedJobs from '../Jobs/AppliedJobs'
import Button from '@material-ui/core/Button'
import NewChannel from '../Chat/NewChannel'

const SingleUser = props => {
  const id = props.match.params.id
  const singleUser = useSelector(state => state.singleUser)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSingleUser(id))
  }, [])

  return (
    <div id="singleUserProfile" className="container">
      <div className="allJobs">
        <div key={user._id}>
          <img src={user.image} />
          <h4>
            {singleUser.firstName} {singleUser.lastName}
          </h4>
          <p>{singleUser.email}</p>
          <p>About: {singleUser.biography}.</p>
          {singleUser.technicalSkills && (
            <p>Technologies: {singleUser.technicalSkills[0]}</p>
          )}

          <div className="user-profile-buttons">
            {singleUser._id === user._id ? null : (
              <div>
                <NewChannel />
              </div>
            )}
            {user._id === singleUser._id ? (
              <div id="update-profile-button">
                <p>
                  <Link to={`/myprofile/${id}/update`}>
                    <Button variant="contained" color="primary">
                      Update My Profile
                    </Button>
                  </Link>
                </p>
              </div>
            ) : null}
            {user.isAdmin && user._id !== singleUser._id ? (
              <div>
                <Link to={`/users/${singleUser._id}/update`}>
                  <Button variant="contained" color="primary">
                    Update This User
                  </Button>
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="useList">
        <div>
          <h2 className="userJobList">Applied Job History</h2>
          <AppliedJobs user={user} />
        </div>
        <div>
          <h2 className="userJobList">Saved Jobs</h2>
          <SavedJobs user={user} />
        </div>
      </div>
    </div>
  )
}

export default SingleUser
