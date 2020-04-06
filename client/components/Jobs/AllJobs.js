import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllJobs, getSingleJob} from '../../store/job'
import {Link, useParams} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import SingleJob from './SingleJob'
import moment from 'moment'

const AllJobs = () => {
  const jobs = useSelector(state => state.jobs) // ~ replaces MSTP
  const dispatch = useDispatch() // ~ replaces MDTP
  const {id} = useParams()
  const job = useSelector(state => state.job)

  // const [jobs, setJobs] = useState(jobs)   // not used bc we used useSelector
  // useEffect replaces componentDidMount, componentWillUnmount
  useEffect(() => {
    dispatch(getAllJobs())
  }, [])
  // pass in empty array to only run on mount and unmount, this stops infinite loops

  // --- this useEffect is for singleJob component to be shown on right
  useEffect(
    () => {
      dispatch(getSingleJob(id))
    },
    [id]
  )
  // up until here

  const availableJobs = jobs.filter(job => job.availibilty === true)
  return (
    <div id="allJobPage" className="">
      <div id="allJobs">
        {availableJobs.map(job => (
          <div className="individual-job-cards" key={job._id}>
            <Link to={`/jobs/${job._id}`}>
              <h3>{job.title}</h3>
            </Link>
            {job.company ? <p>{job.company.companyName}</p> : null}
            <p>{job.location}</p>
            <p>Est. Salary: ${job.salary}</p>
            <p>Posted: {job.datePosted}</p>
            <img src={job.imageUrl} />
          </div>
        ))}
      </div>
      <div id="singleJobRight">
        {id ? <SingleJob id={id} job={job} /> : null}
      </div>
    </div>
  )
}

export default AllJobs

