import React, {Component, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getSingleUser} from '../../store/single-user'

const SingleUser = props => {
  const id = props.match.params.id
  const user = useSelector(state => state.singleUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSingleUser(id))
  }, [])

  return (
    <div>
      <div>
        <div key={user._id}>
          <p>{user.firstName}</p>
          <div>
            <img src={user.imageUrl} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleUser
