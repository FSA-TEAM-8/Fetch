import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateCompany} from '../../store/company'
import Button from '@material-ui/core/Button'

const UpdateCompany = () => {
  // need to get the existing job with the _id then change the state with the code below and send the changes to the updatejob thunk

  const company = useSelector(state => state.company)
  const dispatch = useDispatch()
  const [companyName, setCompanyName] = useState('')
  const [size, setSize] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const obj = {
      _id: company._id,
      companyName,
      size,
      description,
      category
    }
    dispatch(updateCompany(obj))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <Button type="submit" variant="contained" color="primary">
          Update Company
        </Button>
      </form>
    </div>
  )
}

export default UpdateCompany
