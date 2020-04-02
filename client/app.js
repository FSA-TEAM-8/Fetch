import React from 'react'
import Routes from './routes'
import {Navbar, TabPanel} from './components'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Routes />
    </div>
  )
}

export default App
