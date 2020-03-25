import React, {Component, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getJobFromIds, removeSavedJob} from '../../store/job'

const SavedJobs = props => {
  const jobIds = props.user.savedJobs

  const savedJobs = useSelector(state => state.jobs)
  const dispatch = useDispatch()

  useEffect(
    () => {
      if (jobIds) {
        dispatch(getJobFromIds(jobIds))
      }
    },
    [jobIds]
  ) // runs when jobIds renders

  const handleClick = id => {
    const filteredJobs = savedJobs.filter(job => job._id !== id)
    dispatch(removeSavedJob({savedJobs: filteredJobs}, props.user._id)) // req.body
  }

  return (
    <div>
      Saved Jobs
      {savedJobs
        ? savedJobs.map(job => (
            <div key={job._id}>
              <div>
                <h3>{job.title}</h3>
                <p>Contact Email: {job.contactEmail}</p>
                <p>Location: {job.location}</p>
                <p>Date Posted: {job.datePosted}</p>
              </div>
              <button type="submit" onClick={() => handleClick(job._id)}>
                X
              </button>
            </div>
          ))
        : null}
    </div>
  )
}

export default SavedJobs
