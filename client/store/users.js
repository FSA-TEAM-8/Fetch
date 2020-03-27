import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GOT_USERS = 'GOT_USERS'
const GOT_EMPLOYERS = 'GOT_EMPLOYERS'
const GOT_CANDIDATES = 'GOT_CANDIDATES'

/**
 * INITIAL STATE
 */
const defaultUsers = []

/**
 * ACTION CREATORS
 */
const gotUsers = users => ({type: GOT_USERS, users})
const gotEmployers = employers => ({type: GOT_EMPLOYERS, employers})

/**
 * THUNK CREATORS
 */

export const getAllEmployers = () => async dispatch => {
  console.log('Do I RUN?, at THUNK')
  try {
    const {data} = await axios.get('/api/users/employers')
    dispatch(gotEmployers(data))
  } catch (err) {
    console.error(err)
  }
}

export const getAllUsers = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/users')
    dispatch(gotUsers(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export const users = (state = defaultUsers, action) => {
  switch (action.type) {
    case GOT_USERS:
      return action.users
    default:
      return state
  }
}

export const employers = (state = [], action) => {
  switch (action.type) {
    case GOT_EMPLOYERS:
      return action.employers
    default:
      return state
  }
}
