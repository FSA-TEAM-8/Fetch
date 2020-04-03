import axios from 'axios'

// action types
const GOT_ALL_COMPANIES = 'GOT_ALL_COMPANIES'
const ADDED_COMPANY = 'ADD_COMPANY'
const GOT_SINGLE_COMPANY = 'GOT_SINGLE_COMPANY'
const UPDATED_COMPANY = 'UPDATED_COMPANY'

// action creator
const gotAllCompanies = companies => ({
  type: GOT_ALL_COMPANIES,
  companies
})

const addedCompany = company => ({
  type: ADDED_COMPANY,
  company
})

const gotSingleCompany = company => ({
  type: GOT_SINGLE_COMPANY,
  company
})

const updatedCompany = company => ({
  type: UPDATED_COMPANY,
  company
})

// thunk creator
export const getAllCompanies = () => async dispaatch => {
  try {
    const {data} = await axios.get('/api/companies')
    dispaatch(gotAllCompanies(data))
  } catch (error) {
    console.error(error)
  }
}

export const addCompany = company => async dispatch => {
  try {
    const response = await axios.post('/api/companies', company)
    dispatch(addedCompany(response.data))
  } catch (error) {
    console.error('Error adding a company', error)
  }
}

export const getSingleCompany = id => async dispatch => {
  try {
    const response = await axios.get(`/api/companies/${id}`)
    dispatch(gotSingleCompany(response.data))
  } catch (error) {
    console.error('Error getting single company', error)
  }
}

export const updateCompany = company => async dispatch => {
  try {
    const response = await axios.put(`/api/companies/${company._id}`, company)
    dispatch(updatedCompany(response.data))
  } catch (error) {
    console.error('Error updating a company', error)
  }
}

// reducer
export const companies = (state = [], action) => {
  switch (action.type) {
    case GOT_ALL_COMPANIES:
      return action.companies
    case ADDED_COMPANY:
      return [...state, action.company]
    case UPDATED_COMPANY:
      return state.filter(
        company =>
          company._id === action.company._id ? action.company : company
      )
    default:
      return state
  }
}

export const company = (state = {}, action) => {
  switch (action.type) {
    case GOT_SINGLE_COMPANY:
      return action.company
    default:
      return state
  }
}
