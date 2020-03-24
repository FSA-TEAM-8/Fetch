import axios from 'axios'

// action types
const GET_ALL_COMPANIES = 'GET_ALL_COMPANIES'
const ADD_COMPANY = 'ADD_COMPANY'

// action creator
const gotAllCompanies = companies => ({
  type: GET_ALL_COMPANIES,
  companies
})

const addedCompany = company => ({
  type: ADD_COMPANY,
  company
})

// thunk creator
export const getAllCompanies = () => async dispaatch => {
  try {
    const {data} = await axios.get('/api/companies')
    console.log(data)
    dispaatch(gotAllCompanies(data))
  } catch (error) {
    console.error(error)
  }
}

export const addCompany = company => async dispatch => {
  try {
    console.log(company)
    const response = await axios.post('/api/companies', company)
    dispatch(addedCompany(response.data))
    console.log('RESPONSE>DATA', response.data)
  } catch (error) {
    console.error('Error adding a company', error)
  }
}

// reducer
export const companies = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_COMPANIES:
      return action.companies
    case ADD_COMPANY:
      return [...state, action.company]
    default:
      return state
  }
}
