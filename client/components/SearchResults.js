import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {searchJob} from '../store/job'
import {Link} from 'react-router-dom'

const SearchResults = props => {
  const obj = props.location.state
  const dispatch = useDispatch() // ~ replaces MDTP

  useEffect(() => {
    dispatch(searchJob(obj))
  }, [])

  const jobs = useSelector(state => state.searchedJobs)
  // const availableJobs = jobs.filter(job => job.availibilty === true)
  return (
    <div className="container">
      {/* {user.isEmployer && (
      <Link to="/addJob">
        <Button variant="contained" color="primary">
          Add a Job Listing
        </Button>
      </Link>
     )} */}
      <div>
        {jobs.map(job => (
          <div className="allJobs" key={job._id}>
            <Link to={`/jobs/${job._id}`}>
              <h3>{job.title}</h3>
            </Link>
            <p>Estimated Salary: ${job.salary}</p>
            <p>Contact Email: {job.contactEmail}</p>
            <p>Location: {job.location}</p>
            <p>Date Posted: {job.datePosted}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default SearchResults
