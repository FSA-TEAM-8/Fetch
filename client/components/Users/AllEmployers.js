import React, {Component, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllEmployers} from '../../store/users'
import {Link} from 'react-router-dom'

const AllEmployers = () => {
  const users = useSelector(state => state.employers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllEmployers())
  }, [])

  return (
    <div>
      {users.map(user => (
        <Link to={`/users/${user._id}`} key={user._id}>
          <div>
            <p>{`${user.firstName} ${user.lastName}`}</p>
            <p>{user.email}</p>
            <p>{user.company}</p>
            <p>{typeof user._id}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AllEmployers
