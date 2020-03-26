import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addJob} from '../../store/job'
import Button from '@material-ui/core/Button'

const AddJob = () => {
  // const [job, setJob] = useState({})
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [location, setLocation] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const obj = {
      title,
      contactEmail,
      location
    }
    // setJob(obj)
    dispatch(addJob(obj))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Job Title:
          <input
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </label>
        <label>
          Job Contact Email:
          <input
            type="text"
            value={contactEmail}
            onChange={event => setContactEmail(event.target.value)}
          />
        </label>
        <label>
          Job Location:
          <input
            type="text"
            value={location}
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <Button type="submit" variant="contained" color="primary">
          Add Job
        </Button>
      </form>
    </div>
  )
}

export default AddJob
