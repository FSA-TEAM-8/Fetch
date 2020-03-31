import React, {Component, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllCandidates} from '../../store/users'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

const AllCandidates = () => {
  const users = useSelector(state => state.candidates)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCandidates())
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
          <Link to={`/candidates/${user._id}`} key={user._id}>
            <div className="allUsers">
              <h4>{`${user.firstName} ${user.lastName}`}</h4>
              <p>{user.email}</p>
              <p>Is user a jobseeker?: {String(user.isCandidate)}</p>
            </div>
          </Link>
        ))}
      </Grid>
    </div>
  )
}

export default AllCandidates
