import axios from 'axios'
import {combineReducers} from 'redux'

// action types
const GOT_ALL_JOBS = 'GOT_ALL_JOBS'
const ADDED_JOB = 'ADDED_JOB'
const UPDATED_JOB = 'UPDATED_JOB'
const GOT_SINGLE_JOB = 'GOT_SINGLE_JOB'
const REMOVE_SAVED_JOB = 'REMOVED_SAVED_JOB'
const GOT_SAVED_JOBS = 'GOT_SAVED_JOBS'
const GOT_APPLIED_JOBS = 'GOT_APPLIED_JOBS'

// action creator
const gotAllJobs = jobs => ({
  type: GOT_ALL_JOBS,
  jobs
})

const addedJob = job => ({
  type: ADDED_JOB,
  job
})

const updatedJob = job => ({
  type: UPDATED_JOB,
  job
})

const gotSingleJob = job => ({
  type: GOT_SINGLE_JOB,
  job
})

const removedSavedJob = savedJobs => ({
  type: REMOVE_SAVED_JOB,
  savedJobs
})

const gotSavedJobs = savedJobs => ({
  type: GOT_SAVED_JOBS,
  savedJobs
})

const gotAppliedJobs = appliedJobs => ({
  type: GOT_APPLIED_JOBS,
  appliedJobs
})

// thunk creator
export const getAllJobs = () => async dispatch => {
  try {
    const response = await axios.get('/api/jobs')
    dispatch(gotAllJobs(response.data))
  } catch (error) {
    console.error('Error getting all jobs', error)
  }
}

export const addJob = job => async dispatch => {
  try {
    const response = await axios.post('/api/jobs', job)
    dispatch(addedJob(response.data))
  } catch (error) {
    console.error('Error adding a job', error)
  }
}

export const updateJob = job => async dispatch => {
  try {
    const response = await axios.put(`/api/jobs/${job._id}`, job)
    console.log('response.data', response.data)
    dispatch(updatedJob(response.data))
  } catch (error) {
    console.error('Error updating a job', error)
  }
}

export const getSingleJob = id => async dispatch => {
  try {
    const response = await axios.get(`/api/jobs/${id}`)
    dispatch(gotSingleJob(response.data))
  } catch (error) {
    console.error('Error getting single job', error)
  }
}

export const getSavedJobsFromIds = jobIdArr => async dispatch => {
  try {
    const response = await axios.put('/api/jobs', jobIdArr)
    dispatch(gotSavedJobs(response.data))
  } catch (error) {
    console.error('Error getting jobs from ids', error)
  }
}

export const getAppliedJobsFromIds = jobIdArr => async dispatch => {
  try {
    const response = await axios.put('/api/jobs', jobIdArr)
    dispatch(gotAppliedJobs(response.data))
  } catch (error) {
    console.error('Error getting jobs from ids', error)
  }
}

export const removeSavedJob = (savedJobs, id) => async dispatch => {
  try {
    await axios.put(`/api/users/${id}`, savedJobs)
    dispatch(removedSavedJob(savedJobs.savedJobs))
  } catch (error) {
    console.error('Error removing saved job', error)
  }
}

// reducer
export const jobs = (state = [], action) => {
  switch (action.type) {
    case GOT_ALL_JOBS:
      return action.jobs
    // return  {...state, jobs: action.jobs}
    case ADDED_JOB:
      return [...state, action.job]
    case UPDATED_JOB:
      return state.filter(
        job => (job._id === action.job._id ? action.job : job)
      )
    case REMOVE_SAVED_JOB:
      return action.savedJobs
    default:
      return state
  }
}

export const job = (state = {}, action) => {
  switch (action.type) {
    case UPDATED_JOB:
      return action.job
    case GOT_SINGLE_JOB:
      return action.job
    case GOT_SAVED_JOBS:
      return {...state, savedJobs: action.savedJobs}
    case GOT_APPLIED_JOBS:
      return {...state, appliedJobs: action.appliedJobs}
    case REMOVE_SAVED_JOB:
      return {...state, savedJobs: action.savedJobs}
    default:
      return state
  }
}
