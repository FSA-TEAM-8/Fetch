import React, {Component, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllUsers} from '../../store/users'

const AllUsers = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  console.log('All the users', users)
  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  return (
    <div>
      <div>
        {users.map(user => (
          <div key={user._id}>
            <p>{user.firstName}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default AllUsers
