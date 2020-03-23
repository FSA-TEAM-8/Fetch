import React, {Component, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllJobs} from '../../store/job'
import AddJob from './AddJob'
import UpdateJob from './UpdateJob'

const AllJobs = () => {
  const jobs = useSelector(state => state.jobs) // ~ replaces MSTP
  const dispatch = useDispatch() // ~ replaces MDTP

  // const [jobs, setJobs] = useState(jobs)   // not used bc we used useSelector
  console.log('jobs', jobs)
  useEffect(() => {
    // useEffect replaces componentDidMount, componentWillUnmount
    dispatch(getAllJobs())
  }, []) // pass in empty array to only run on mount and unmount, this stops infinite loops

  return (
    <div>
      <AddJob />
      <div>
        {jobs.map(job => (
          <div>
            <p key={job._id}>{job.title}</p>
            <UpdateJob />
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
