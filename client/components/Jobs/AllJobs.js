import React, {Component, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllJobs} from '../../store/job'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

const AllJobs = () => {
  const user = useSelector(state => state.user)
  const jobs = useSelector(state => state.jobs) // ~ replaces MSTP
  const dispatch = useDispatch() // ~ replaces MDTP

  // const [jobs, setJobs] = useState(jobs)   // not used bc we used useSelector
  useEffect(() => {
    // useEffect replaces componentDidMount, componentWillUnmount
    dispatch(getAllJobs())
  }, []) // pass in empty array to only run on mount and unmount, this stops infinite loops

  const availableJobs = jobs.filter(job => job.availibilty === true)
  return (
    <div>
      {user.isEmployer && (
        <Link to="/jobs/addJob">
          <button>Add a Job Listing</button>
        </Link>
      )}
      <div>
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
      </div>
    </div>
  )
}
export default AllJobs

/*  Below is the class component format of above

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getAllJobs} from '../../store/job'

export class AllJobs extends Component {

  componentDidMount() {
    this.props.getAllJobs()
  }
  render() {
    console.log('consolelog', this.props.jobs)
    return (
      <div>
        {this.props.jobs.map(job => (
          <p key={job._id}>{job.title}</p>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  jobs: state.jobs
})

const mapDispatchToProps = dispatch => ({
  getAllJobs: () => dispatch(getAllJobs())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllJobs)

*/
