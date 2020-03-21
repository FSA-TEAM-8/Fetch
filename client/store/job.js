import axios from 'axios'
import {combineReducers} from 'redux'

// action types
const GOT_ALL_JOBS = 'GOT_ALL_JOBS'
const ADDED_JOB = 'ADDED_JOB'

// action creator
const gotAllJobs = jobs => ({
  type: GOT_ALL_JOBS,
  jobs
})

const addedJob = job => ({
  type: ADDED_JOB,
  job
})

// thunk creator
export const getAllJobs = () => async dispatch => {
  try {
    const response = await axios.get('/api/jobs')
    dispatch(gotAllJobs(response.data))
  } catch (error) {
    console.error(error)
  }
}

export const addJob = () => async dispatch => {
  try {
    const response = await axios.post('/api/jobs')
    dispatch(addedJob(response.data))
  } catch (error) {
    console.error(error)
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
    default:
      return state
  }
}

export const job = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}
