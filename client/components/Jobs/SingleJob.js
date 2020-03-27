import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {getSingleJob} from '../../store/job'
import UpdateJob from './UpdateJob'

import SaveJob from './SaveJob'
import ApplyJob from './ApplyJob'

const SingleJob = props => {
  const id = props.match.params.id
  const job = useSelector(state => state.job)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingleJob(id))
  }, [])

  return (
    <div>
      <UpdateJob />
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
  )
}

export default SingleJob
