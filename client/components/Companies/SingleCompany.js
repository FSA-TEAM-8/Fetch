import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {getSingleCompany} from '../../store/company'
import UpdateCompany from './UpdateCompany'

const SingleCompany = props => {
  const user = useSelector(state => state.user)
  const id = props.match.params.id

  const company = useSelector(state => state.company)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingleCompany(id))
  }, [])
  console.log('SINGLE COMPANY', company)
  return (
    <div>
      <h3>
        Company Name (And still single company page): {company.companyName}
      </h3>
      <p />
      <div>{(user.company === id || user.isAdmin) && <UpdateCompany />}</div>
    </div>
  )
}

export default SingleCompany
