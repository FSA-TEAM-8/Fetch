import axios from 'axios'
import {combineReducers} from 'redux'

// action types
const GET_ALL_JOBS = 'GET_ALL_JOBS'

// action creator
const gotAllJobs = jobs => ({
  type: GET_ALL_JOBS,
  jobs
})

// thunk creator
export const getAllJobs = () => async dispatch => {
  try {
    const response = await axios.get('/api/jobs')
    console.log(response.data)
    dispatch(gotAllJobs(response.data))
  } catch (error) {
    console.error(error)
  }
}

// reducer
export const jobs = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_JOBS:
      return action.jobs
    // return  {...state, jobs: action.jobs}
    default:
      return state
  }
}

const job = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({job, jobs})
