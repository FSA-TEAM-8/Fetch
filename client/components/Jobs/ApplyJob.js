import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {me} from '../../store/user'
import {updateSingleUser} from '../../store/single-user'
import {updateJob} from '../../store/job'
import Button from '@material-ui/core/Button'

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
    // if user's applied job history does NOT have current jobid
    // if job's applied user histroy does NOT have current userid
    if (
      !user.jobHistory.includes(job._id) &&
      !job.appliedCandidates.includes(user._id)
    ) {
      user.jobHistory.push(job._id)
      dispatch(updateSingleUser(user))
      job.appliedCandidates.push(user._id)
      dispatch(updateJob(job))

      // remove job in savedjob if you applied for job
      if (user.savedJobs.includes(job._id)) {
        user.savedJobs = user.savedJobs.filter(
          savedJobsId => savedJobsId !== job._id
        )
      }
    } else {
      console.log('clicked apply job but nothing happened')
    }
  }
  return (
    <div>
      <Button
        type="submit"
        onClick={onClick}
        variant="contained"
        color="primary"
      >
        Apply to Job
      </Button>
    </div>
  )
}

export default ApplyJob
