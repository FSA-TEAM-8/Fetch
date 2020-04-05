import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getSingleJob} from '../../store/job'
import UpdateJob from './UpdateJob'
import {Link} from 'react-router-dom'

import SaveJob from './SaveJobButton'
import ApplyJob from './ApplyJobButton'

const SingleJob = props => {
  const user = useSelector(state => state.user)
  const id = props.match.params.id
  // steps below ran in AllJobs instead for --> singleJob right side display
  const job = useSelector(state => state.job)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingleJob(id))
  }, [])

  // below steps work for singleJob right side display
  // const job = props.job

  return (
    <div id="singleJob" key={job._id}>
      <div className="singleItem">
        <h2>{job.title}</h2>
        {job.company ? <p>{job.company.companyName}</p> : null}
        <p>{job.location}</p>
        <p>Est. Salary: ${job.salary}</p>
        <p>Position Type: {job.roleType}</p>
        <p>Experience Level: {job.experienceLevel}</p>
        <p>Posted on: {job.datePosted}</p>
        <div className="inlineComponents">
          <SaveJob job={job} />
          <ApplyJob job={job} />
        </div>
      </div>
      <br />
      {JSON.stringify(user) !== '{}' &&
      (user._id === job.author || user.isAdmin) ? (
        <UpdateJob />
      ) : null}
      <br />
      <div>
        {(user._id === job.author && job.appliedCandidates) ||
        (user.isAdmin &&
          job.appliedCandidates &&
          job.appliedCandidates.length > 0) ? (
          <div className="current-applicants">
            Current Applicants:
            {job.appliedCandidates.map(candidate => (
              <Link to={`/candidates/${candidate._id}`} key={candidate._id}>
                <div>
                  <p>{`${candidate.firstName} ${candidate.lastName}`}</p>
                  <p>{candidate.email}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="current-applicants">
            This position is accepting candidates.
          </div>
        )}
      </div>
    </div>
  )
}

export default SingleJob
