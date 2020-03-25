import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {me} from '../../store/user'
import {updateSingleUser} from '../../store/single-user'

const ApplyJob = props => {
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
    console.log(job)
    if (!user.jobHistory.includes(job._id)) {
      user.jobHistory.push(job)
      dispatch(updateSingleUser(user._id, user))
      console.log('applied')
    }
    console.log('clicked apply job')
  }
  return (
    <div>
      <button type="submit" onClick={onClick}>
        Apply to Job
      </button>
    </div>
  )
}

export default ApplyJob
