import React, {Component, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllCandidates} from '../../store/users'
import {Link} from 'react-router-dom'

const AllCandidates = () => {
  const users = useSelector(state => state.candidates)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCandidates())
  }, [])

  return (
    <div>
      {users.map(user => (
        <Link to={`/candidates/${user._id}`} key={user._id}>
          <div>
            <p>{`${user.firstName} ${user.lastName}`}</p>
            <p>{user.email}</p>
            <p>Is this user a jobseeker?: {String(user.isCandidate)}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AllCandidates
