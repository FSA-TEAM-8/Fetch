import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {me} from '../../store/user'
import {updateSingleUser} from '../../store/single-user'

const SaveJob = props => {
  const job = props.job
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(me) // gets the current logged in user
    },
    [user]
  )

  const onClick = () => {
    if (!user.savedJobs.filter(saveJobId => saveJobId === job._id).length) {
      user.savedJobs.push(job)
      dispatch(updateSingleUser(user._id, user))
      console.log('saved!')
    }
    console.log('clicked save job')
  }

  return (
    <div>
      <button type="submit" onClick={onClick}>
        Save Job
      </button>
    </div>
  )
}

export default SaveJob
