import React, {Component, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllUsers} from '../../store/users'
import {Link} from 'react-router-dom'

const AllUsers = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  return (
    <div>
      {users.map(user => (
        <Link to={`/users/${user._id}`} key={user._id}>
          <div>
            <p>{`${user.firstName} ${user.lastName}`}</p>
            <p>{user.email}</p>
            <p>{typeof user._id}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AllUsers
