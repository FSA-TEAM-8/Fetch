import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
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
    <div id="addCompany" className="container">
      <form onSubmit={handleSubmit} className="alignInputs">
        <label>
          Company Name:
          <input
            type="text"
            placeholder="Enter Company Name"
            value={companyName}
            onChange={event => setCompanyName(event.target.value)}
          />
        </label>
        <label>
          Company Size:
          <input
            type="text"
            placeholder="Enter Company Size"
            value={size}
            onChange={event => setSize(event.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            placeholder="Enter Company Description"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            placeholder="Enter Company Category"
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
