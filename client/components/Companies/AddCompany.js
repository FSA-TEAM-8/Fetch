import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addCompany} from '../../store/company'
import Button from '@material-ui/core/Button'

export default function AddCompany() {
  // const [job, setJob] = useState({})
  const dispatch = useDispatch()

  const [companyName, setCompanyName] = useState('')
  const [size, setSize] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const obj = {
      companyName,
      size,
      description,
      category
    }

    dispatch(addCompany(obj))

    setCompanyName('')
    setSize('')
    setDescription('')
    setCategory('')
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="alignInputs">
        <label>
          Company Name:
          <input
            type="text"
            value={companyName}
            onChange={event => setCompanyName(event.target.value)}
          />
        </label>
        <label>
          Company Size:
          <input
            type="text"
            value={size}
            onChange={event => setSize(event.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={event => setCategory(event.target.value)}
          />
        </label>
        <p className="clearBoth">
          <Button type="submit" variant="contained" color="primary">
            Add Company
          </Button>
        </p>
      </form>
    </div>
  )
}
