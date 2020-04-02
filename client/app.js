import React from 'react'
import Routes from './routes'
import {Navbar, TabPanel, Footer} from './components'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
