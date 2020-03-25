import React, {Component, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getSingleUser} from '../../store/single-user'

import UploadFile from './Upload'
import DownloadFile from './Download'

import SavedJobs from '../Jobs/SavedJobs'
import AppliedJobs from '../Jobs/AppliedJobs'

const SingleUser = props => {
  const id = props.match.params.id
  const user = useSelector(state => state.singleUser)
  console.log('RESUME', user.resume)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSingleUser(id))
  }, [])

  return (
    <div>
      <div>
        <div key={user._id}>
          <p>{user.firstName}</p>
          <p>Here's your resume: {user.resume}</p>
          <div>
            <img src={user.imageUrl} />
            <UploadFile user={user} />
          </div>
          <div>
            <DownloadFile user={user} />
          </div>
        </div>
      </div>
      <SavedJobs user={user} />
      <AppliedJobs user={user} />
    </div>
  )
}
export default SingleUser
