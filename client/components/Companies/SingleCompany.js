import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getSingleCompany} from '../../store/company'
import UpdateCompany from './UpdateCompany'
import {Link} from 'react-router-dom'

const SingleCompany = props => {
  const user = useSelector(state => state.user)
  const id = props.match.params.id
  const company = useSelector(state => state.company)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSingleCompany(id))
  }, [])

  return (
    <div id="singleCompany" className="container">
      <div className="singleItem">
        <h3>{company.companyName}</h3>
        <p>Company Size: {company.size}</p>
        <p>Company Description: {company.description}</p>
        <p>Company Category: {company.category}</p>
      </div>
      <br />
      <div>{(user.company === id || user.isAdmin) && <UpdateCompany />}</div>
      <div>
        {company.jobPostedHistory && company.jobPostedHistory.length > 0 ? (
          <div>
            Current Openings at {company.companyName}
            {company.jobPostedHistory.map(opening => (
              <Link to={`/jobs/${opening._id}`} key={opening._id}>
                <div>
                  <p>{`${opening.title}`}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div>No current openings</div>
        )}
      </div>
    </div>
  )
}

export default SingleCompany
