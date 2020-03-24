/* eslint-disable no-lone-blocks */
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addCompany} from '../../store/company'
import {useForm} from 'react-hook-form'

const AddCompany = () => {
  const {register} = useForm()

  const dispatch = useDispatch()

  const [companyName, setCompanyName] = useState('')
  const [companySize, setCompanySize] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const obj = {
      companyName,
      companySize,
      description,
      category
    }

    dispatch(addCompany(obj))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={companyName}
          placeholder="Company Name"
          name="companyName"
          ref={register({required: true, maxLength: 100})}
          onChange={event => setCompanyName(event.target.value)}
        />
        <select
          name="companySize"
          ref={register({required: true})}
          value={companySize}
          onChange={event => setCompanySize(event.target.value)}
        >
          <option>Startup (0-50 employees)</option>
          <option> Mid-Level (51-250 employees)</option>
          <option> Large Oranization (250+ employees)</option>
        </select>
        <input
          type="text"
          value={description}
          placeholder="Description"
          name="Description"
          ref={register({required: true, min: 50, maxLength: 450})}
          onChange={event => setDescription(event.target.value)}
        />
        <select
          name="category"
          ref={register({required: true})}
          value={category}
          onChange={event => setCategory(event.target.value)}
        >
          <option>Front-End</option>
          <option> Back-End</option>
          <option> Full-Stack</option>
        </select>

        <input type="submit" />
      </form>
    </div>
  )
}

export default AddCompany

// {
//   /* <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={companyName}
//         placeholder="Company Name"
//         name="companyName"
//         ref={register({required: true, maxLength: 100})}
//         onChange={event => setCompanyName(event.target.value)}
//       />
//       <select
//         name="companySize"
//         ref={register({required: true})}
//         value={companySize}
//         onChange={event => setCompanySize(event.target.value)}
//       >
//         <option>Startup (0-50 employees)</option>
//         <option> Mid-Level (51-250 employees)</option>
//         <option> Large Oranization (250+ employees)</option>
//       </select>
//       <input
//         type="text"
//         value={description}
//         placeholder="Description"
//         name="Description"
//         ref={register({required: true, min: 50, maxLength: 450})}
//         onChange={event => setDescription(event.target.value)}
//       />
//       <select
//         name="category"
//         ref={register({required: true})}
//         value={category}
//         onChange={event => setCategory(event.target.value)}
//       >
//         <option>Front-End</option>
//         <option> Back-End</option>
//         <option> Full-Stack</option>
//       </select>

//       <input type="submit" />
//     </form> */
// }
