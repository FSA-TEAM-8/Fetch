/* eslint-disable no-return-assign */
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
  const singleUser = useSelector(state => state.singleUser)
  console.log('FirstName', singleUser.firstName)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSingleUser(id))
  }, [])

  return (
    <div className="container">
      <div>
        <div key={user._id}>
          <p>{singleUser.firstName}</p>
          <p>{singleUser.email}</p>
          {user._id === singleUser._id && (
            <Link to={`/myprofile/${id}/update`}>
              <Button variant="contained" color="primary">
                Update My Profile
              </Button>
            </Link>
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
