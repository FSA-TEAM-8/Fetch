import React, {useEffect, useState, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateSingleUser} from '../../store/single-user'
import Button from '@material-ui/core/Button'
import axios from 'axios'

const UpdateSingleUser = () => {
  const user = useSelector(state => state.singleUser)
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [file, setFile] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const data = {
      _id: user._id,
      firstName,
      lastName,
      email,
      file
    }

    const formData = new FormData()
    formData.append('resume', file)
    axios.post('/api/users/upload', formData, {})
    dispatch(updateSingleUser(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="alignInputs">
        <label>
          Current Name: {user.firstName}
          Current Resume: {user.resume}
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
        <label>
          Upload Resume:
          <input
            type="file"
            onChange={event => setFile(event.target.files[0])}
          />
        </label>
        <p className="clearBoth">
          <Button type="submit" variant="contained" color="primary">
            Update This Profile
          </Button>
        </p>
      </form>
    </div>
  )
}

export default UpdateSingleUser
