import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {getSingleCompany} from '../../store/company'
import UpdateCompany from './UpdateCompany'

const SingleCompany = props => {
  const id = props.match.params.id
  const company = useSelector(state => state.company)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSingleCompany(id))
  }, [])

  return (
    <div>
      Single Company Component
      <div>
        <h3>Company Name: {company.companyName}</h3>
        <p>Company Size: {company.size}</p>
        <p>Company Description: {company.description}</p>
        <p>Company Category: {company.category}</p>
      </div>
      <br />
      <div>
        <UpdateCompany />
      </div>
    </div>
  )
}

export default SingleCompany
