import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect} from 'react'
import {getAllCompanies} from '../../store/company'

export default function AllCompanies() {
  const companies = useSelector(state => state.companies)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCompanies())
  }, [])

  return (
    <div>
      Hello from AllCompanies
      {companies.map(company => <p key={company._id}>{company.companyName}</p>)}
    </div>
  )
}
