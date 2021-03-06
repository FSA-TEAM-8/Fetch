/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as Footer} from './Footer'
export {default as UserHome} from './user-home'
export {default as Home} from './home'
export {default as AllCompanies} from './Companies/AllCompanies'
export {default as UpdateCompany} from './Companies/UpdateCompany'
export {default as SingleCompany} from './Companies/SingleCompany'
export {default as TabPanel} from './TabPanel'
export {default as AllUsers} from './Users/AllUsers'
export {default as AllEmployers} from './Users/AllEmployers'
export {default as AllCandidates} from './Users/AllCandidates'
export {default as AllJobs} from './Jobs/AllJobs'
export {default as SingleUser} from './Users/SingleUser'
export {default as UpdateSingleUser} from './Users/UpdateUser'
export {default as SearchResults} from './SearchResults'
export {Login, Signup} from './auth-form'
