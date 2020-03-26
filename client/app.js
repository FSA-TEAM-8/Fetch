import React from 'react'

import {Navbar, TabPanel} from './components'

import Routes from './routes'

const App = () => {
  return (
    <div>
      <TabPanel />
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
