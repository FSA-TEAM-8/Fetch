import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getJobFromIds} from '../../store/job'

const AppliedJobs = props => {
  const jobIds = props.user.jobHistory

  const appliedJobs = useSelector(state => state.jobs)
  const dispatch = useDispatch()

  useEffect(
    () => {
      if (jobIds) {
        dispatch(getJobFromIds(jobIds))
      }
    },
    [jobIds]
  )

  return (
    <div>
      Applied Job History
      {appliedJobs
        ? appliedJobs.map(job => (
            <div key={job._id}>
              <div>
                <h3>{job.title}</h3>
                <p>Contact Email: {job.contactEmail}</p>
                <p>Location: {job.location}</p>
                <p>Date Posted: {job.datePosted}</p>
              </div>
            </div>
          ))
        : null}
    </div>
  )
}

export default AppliedJobs
