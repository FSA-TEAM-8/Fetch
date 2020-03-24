import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateJob} from '../../store/job'

export default function UpdateJob() {
  // need to get the existing job with the _id then change the state with the code below and send the changes to the updatejob thunk

  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [location, setLocation] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const obj = {
      title,
      description: {
        contactEmail,
        location
      }
    }
    console.log(obj)
    dispatch(updateJob(obj))
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
        <button type="submit">Update Job</button>
      </form>
    </div>
  )
}
