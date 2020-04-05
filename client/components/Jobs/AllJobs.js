import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllJobs} from '../../store/job'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

const AllJobs = () => {
  const jobs = useSelector(state => state.jobs) // ~ replaces MSTP
  const dispatch = useDispatch() // ~ replaces MDTP

  // const [jobs, setJobs] = useState(jobs)   // not used bc we used useSelector
  // useEffect replaces componentDidMount, componentWillUnmount
  useEffect(() => {
    dispatch(getAllJobs())
  }, [])
  // pass in empty array to only run on mount and unmount, this stops infinite loops

  const availableJobs = jobs.filter(job => job.availibilty === true)
  return (
    <div id="allJobPage" className="">
      <div>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          {availableJobs.map(job => (
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
        </Grid>
      </div>
    </div>
  )
}

export default AllJobs
