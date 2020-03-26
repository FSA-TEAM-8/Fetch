import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {me} from '../../store/user'
import {updateSingleUser} from '../../store/single-user'
import {updateJob} from '../../store/job'

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
    if (
      !user.jobHistory.includes(job._id) &&
      !job.appliedCandidates.includes(user._id)
    ) {
      user.jobHistory.push(job)
      dispatch(updateSingleUser(user))
      job.appliedCandidates.push(user._id)
      dispatch(updateJob(job))
      console.log('applied')

      console.log('user', user)
      console.log('job', job)
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
