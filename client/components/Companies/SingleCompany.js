import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {getSingleCompany} from '../../store/company'
import UpdateCompany from './UpdateCompany'

const SingleCompany = props => {
  const id = props.match.params.id
  const company = useSelector(state => state.company, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingleCompany(id))
  }, [])
  console.log('SINGLE COMPANY', company)
  return (
    <div>
      <h3>Company Name: {company.companyName}</h3>
      <p />
      <div>
        <UpdateCompany />
      </div>
    </div>
  )
}

export default SingleCompany
