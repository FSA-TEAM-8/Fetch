import axios from 'axios'

// action types
const GET_ALL_COMPANIES = 'GET_ALL_COMPANIES'

// action creator
const gotAllCompanies = companies => ({
  type: GET_ALL_COMPANIES,
  companies
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

// reducer
export const companies = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_COMPANIES:
      return action.companies
    default:
      return state
  }
}
