import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateSingleUser} from '../../store/single-user'
import UploadFile from './Upload'
import Button from '@material-ui/core/Button'

const UpdateSingleUser = () => {
  const user = useSelector(state => state.singleUser)
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const data = {
      _id: user._id,
      firstName,
      lastName,
      email
    }
    dispatch(updateSingleUser(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Current Name: {user.firstName}
          <br />
          Update First Name:
          <input
            type="text"
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={event => setLastName(event.target.value)}
          />
        </label>
        <label>
          Preferred Email:
          <input
            type="text"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <Button type="submit" variant="contained" color="primary">
          Update This Profile
        </Button>
      </form>
      <UploadFile user={user} />
    </div>
  )
}

export default UpdateSingleUser
