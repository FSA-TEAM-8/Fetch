import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {getSingleJob} from '../../store/job'
import UpdateJob from './UpdateJob'

const SingleJob = props => {
  const id = props.match.params.id
  const job = useSelector(state => state.job, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingleJob(id))
  }, [])
  console.log(job)

  return (
    <div>
      <UpdateJob />
      <h3>{job.title}</h3>
      <p>Estimated Salary: {job.salary}</p>
      {job.description ? (
        <div>
          <p>Contact Email: {job.description.contactEmail}</p>
          <p>Location: {job.description.location}</p>
          <p>Position: {job.description.roleType}</p>
          <p>Experience: {job.description.experienceLevel}</p>
          <p>Date Posted: {job.description.datePosted}</p>
        </div>
      ) : null}
    </div>
  )
}

export default SingleJob
