import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addJob} from '../../store/job'
import Button from '@material-ui/core/Button'

const AddJob = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [location, setLocation] = useState('')
  const [salary, setSalary] = useState('')
  const [roleType, setRoleType] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const obj = {
      title,
      contactEmail,
      location,
      salary
    }
    // setJob(obj)
    dispatch(addJob(obj))
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="alignInputs">
        <label>
          Job Title:
          <input
            type="text"
            placeholder="Enter Job Title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </label>
        <label>
          Job Contact Email:
          <input
            type="text"
            placeholder="Enter Job Title"
            value={contactEmail}
            onChange={event => setContactEmail(event.target.value)}
          />
        </label>
        <label>
          Job Location:
          <input
            type="text"
            placeholder="Enter Job Location"
            value={location}
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <label>
          Salary:
          <input
            type="text"
            placeholder="Enter Job Salary"
            value={salary}
            onChange={event => setSalary(event.target.value)}
          />
        </label>
        <label>
          Position:
          <input
            type="text"
            placeholder="Enter Job Position"
            value={roleType}
            onChange={event => setRoleType(event.target.value)}
          />
        </label>
        <p className="clearBoth">
          <Button type="submit" variant="contained" color="primary">
            Add Job
          </Button>
        </p>
      </form>
    </div>
  )
}

export default AddJob
