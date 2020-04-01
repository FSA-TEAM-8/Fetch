import React, {Component, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllEmployers} from '../../store/users'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

const AllEmployers = () => {
  const users = useSelector(state => state.employers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllEmployers())
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
              <p>{user.company}</p>
              <p>{typeof user._id}</p>
            </div>
          </Link>
        ))}
      </Grid>
    </div>
  )
}

export default AllEmployers
