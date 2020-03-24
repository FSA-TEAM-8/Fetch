import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import user from './user'
import users from './users'
import singleUser from './single-user'
import {job, jobs} from './job'
import {companies} from './company'

const reducer = combineReducers({
  user,
  users,
  singleUser,
  job,
  jobs,
  companies
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
