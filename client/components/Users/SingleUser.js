/* eslint-disable no-return-assign */
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getSingleUser} from '../../store/single-user'
import {Link} from 'react-router-dom'
import SavedJobs from '../Jobs/SavedJobs'
import AppliedJobs from '../Jobs/AppliedJobs'
import Button from '@material-ui/core/Button'
import NewChannel from '../Chat/NewChannel'

const SingleUser = props => {
  const id = props.match.params.id
  const singleUser = useSelector(state => state.singleUser)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSingleUser(id))
  }, [])

  return (
    <div className="container">
      <div>
        <div key={user._id}>
          <p>{singleUser.firstName}</p>
          <p>{singleUser.email}</p>

          <div>
            <NewChannel />
          </div>
          {user._id === singleUser._id && (
            <Link to={`/myprofile/${id}/update`}>
              <Button variant="contained" color="primary">
                Update My Profile
              </Button>
            </Link>
          )}

          {user.isAdmin && (
            <Link to={`/users/${singleUser._id}/update`}>
              <Button variant="contained" color="primary">
                Update This User
              </Button>
            </Link>
          )}

          <div>
            <img src={user.imageUrl} />
          </div>
        </div>
      </div>
      <AppliedJobs user={user} />
      <SavedJobs user={user} />
    </div>
  )
}
export default SingleUser
