import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect} from 'react'
import {getAllCompanies} from '../../store/company'
import {Link} from 'react-router-dom'

const AllCompanies = () => {
  const companies = useSelector(state => state.companies)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCompanies())
  }, [])

  return (
    <div className="container">
      {companies.map(company => (
        <div key={company._id} className="allJobs">
          <Link to={`/companies/${company._id}`}>
            <h3>{company.companyName}</h3>
            <p>{company.size}</p>
            <p>{company.description}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default AllCompanies
