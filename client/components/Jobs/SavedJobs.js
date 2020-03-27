import React, {Component, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getSavedJobsFromIds, removeSavedJob} from '../../store/job'
import Button from '@material-ui/core/Button'

const SavedJobs = props => {
  const jobIds = props.user.savedJobs

  const savedJobs = useSelector(state => state.job.savedJobs)
  const dispatch = useDispatch()

  useEffect(
    () => {
      if (jobIds) {
        dispatch(getSavedJobsFromIds(jobIds))
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
      {jobIds && jobIds.length !== 0 && savedJobs
        ? savedJobs.map(job => (
            <div key={job._id}>
              <div>
                <h3>{job.title}</h3>
                <p>Contact Email: {job.contactEmail}</p>
                <p>Location: {job.location}</p>
                <p>Date Posted: {job.datePosted}</p>
              </div>
              <Button
                type="submit"
                onClick={() => handleClick(job._id)}
                variant="contained"
                color="primary"
              >
                X
              </Button>
            </div>
          ))
        : null}
    </div>
  )
}

export default SavedJobs
