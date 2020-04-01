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
  const job = useSelector(state => state.job)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingleJob(id))
  }, [])

  return (
    <div className="container">
      <div className="singleItem">
        <h3>{job.title}</h3>
        <p>Estimated Salary: {job.salary}</p>
        <p>Contact Email: {job.contactEmail}</p>
        <p>Location: {job.location}</p>
        <p>Position: {job.roleType}</p>
        <p>Experience: {job.experienceLevel}</p>
        <p>Date Posted: {job.datePosted}</p>
        <div className="inlineComponents">
          <SaveJob job={job} />
          <ApplyJob job={job} />
        </div>
      </div>
      <br />
      {(user._id === job.author || user.isAdmin) && <UpdateJob />}
      <br />
      <div>
        {(user._id === job.author && job.appliedCandidates) ||
        (user.isAdmin &&
          job.appliedCandidates &&
          job.appliedCandidates.length > 0) ? (
          <div>
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
          <div>No current applicants for this job.</div>
        )}
      </div>
    </div>
  )
}

export default SingleJob
