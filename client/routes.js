import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  AllCompanies,
  SingleCompany,
  AllUsers,
  AllEmployers,
  AllCandidates,
  SingleUser,
  UpdateSingleUser,
  UpdateCompany
} from './components'
import {me} from './store'

import AddCompany from './components/Companies/AddCompany'
import AllJobs from './components/Jobs/AllJobs'
import SingleJob from './components/Jobs/SingleJob'
import AddJob from './components/Jobs/AddJob'
import SavedJobs from './components/Jobs/SavedJobs'
import MessageArea from './components/Chat/MessageArea'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn, isAdmin, isEmployer} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/jobs/:id" component={SingleJob} />
        <Route path="/jobs" component={AllJobs} />
        <Route exact path="/companies/:id" component={SingleCompany} />
        <Route exact path="/companies" component={AllCompanies} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}

            <Route path="/chat" component={MessageArea} />

            <Route path="/companies/:id" component={SingleCompany} />
            <Route path="/companies" component={AllCompanies} />
            <Route path="/addCompany" component={AddCompany} />

            <Route path="/users/:id/savedJobs" component={SavedJobs} />
            <Route path="/users/:id" component={SingleUser} />

            <Route path="/myprofile/:id/savedJobs" component={SavedJobs} />
            <Route path="/myprofile/:id/update" component={UpdateSingleUser} />
            <Route path="/myprofile/:id" component={SingleUser} />

            <Route exact path="/companies/:id" component={SingleCompany} />
            <Route exact path="/companies" component={AllCompanies} />

            <Route path="/jobs/:id" component={SingleJob} />
            <Route path="/home" component={UserHome} />
            {isEmployer && (
              <Switch>
                {/* Routes placed here are only available after logging in and isEmployer is True */}
                <Route path="/addJob" component={AddJob} />
                <Route path="/jobs/:id" component={SingleJob} />
                <Route path="/addJob" component={AddJob} />
                <Route path="/addCompany" component={AddCompany} />
                <Route
                  path="/companies/:id/updateCompany"
                  component={UpdateCompany}
                />

                <Route path="/candidates/:id" component={SingleUser} />
                <Route path="/candidates" component={AllCandidates} />
                {isAdmin && (
                  <Switch>
                    {/* Routes placed here are only available after logging in and isEmployer, isAdmin is True */}
                    <Route
                      path="/users/:id/update"
                      component={UpdateSingleUser}
                    />
                    <Route path="/users/employers" component={AllEmployers} />
                    <Route path="/users/:id" component={SingleUser} />
                    <Route path="/users" component={AllUsers} />
                  </Switch>
                )}
              </Switch>
            )}
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        {isLoggedIn ? <Redirect to="/home" /> : <Route component={Login} />}
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user._id, // mongo id is '_id'
    isAdmin: state.user.isAdmin,
    isEmployer: state.user.isEmployer
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
