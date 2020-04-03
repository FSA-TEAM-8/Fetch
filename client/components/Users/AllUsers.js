import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllUsers} from '../../store/users'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

const AllUsers = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  return (
    <div className="container">
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {users.map(user => (
          <Link to={`/users/${user._id}`} key={user._id}>
            <div className="allUsers">
              <h4>{`${user.firstName} ${user.lastName}`}</h4>
              <p>{user.email}</p>
              <p>
                Status:{' '}
                {user.isAdmin
                  ? 'Admin'
                  : user.isEmployer ? 'Employer' : 'Candidate'}
              </p>
            </div>
          </Link>
        ))}
      </Grid>
    </div>
  )
}

export default AllUsers
