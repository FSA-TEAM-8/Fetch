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
          <h4>{singleUser.firstName}</h4>
          <p>{singleUser.email}</p>

          <div>
            <NewChannel />
          </div>
          {user._id === singleUser._id && (
            <p>
              {' '}
              <Link to={`/myprofile/${id}/update`}>
                <Button variant="contained" color="primary">
                  Update My Profile
                </Button>
              </Link>{' '}
            </p>
          )}

          {user.isAdmin && (
            <Link to={`/users/${singleUser._id}/update`}>
              <Button variant="contained" color="primary">
                Update This User
              </Button>
            </Link>
          )}

          <div>
            <img src={user.imageUrl} />
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
