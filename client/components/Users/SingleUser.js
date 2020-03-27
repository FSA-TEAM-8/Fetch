import React, {Component, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getSingleUser} from '../../store/single-user'
import {Link} from 'react-router-dom'
import UploadFile from './Upload'
import DownloadFile from './Download'
import SavedJobs from '../Jobs/SavedJobs'
import AppliedJobs from '../Jobs/AppliedJobs'
import Button from '@material-ui/core/Button'

const SingleUser = props => {
  const id = props.match.params.id
  const user = useSelector(state => state.singleUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSingleUser(id))
  }, [])

  return (
    <div>
      <div>
        <div key={user._id}>
          <p>{user.firstName}</p>

          <Link to={`/users/${id}/update`}>
            <Button variant="contained" color="primary">
              Update My Profile
            </Button>
          </Link>
          <Link to={`/myprofile/${id}/update`}>
            <button>Update My Profile</button>
          </Link>
          <div>
            <img src={user.imageUrl} />
            <UploadFile user={user} />
          </div>
          <div>
            <DownloadFile user={user} />
          </div>
        </div>
      </div>
      <AppliedJobs user={user} />
      <SavedJobs user={user} />
    </div>
  )
}
export default SingleUser
