import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import user from './user'
import {users, employers, candidates} from './users'
import singleUser from './single-user'
import {job, jobs, searchedJobs} from './job'
import {companies, company} from './company'
import chat from './chat'

const reducer = combineReducers({
  user,
  users,
  employers,
  candidates,
  singleUser,
  job,
  jobs,
  searchedJobs,
  companies,
  company,
  chat
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
