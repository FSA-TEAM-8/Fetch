import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {searchJob} from '../store/job'
import {useHistory} from 'react-router-dom'

import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Button from '@material-ui/core/Button'

const SearchBar = () => {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = event => {
    event.preventDefault()
    const obj = {
      title,
      location
    }
    dispatch(searchJob(obj))
    history.push(`/search?title=${title}&location=${location}`, {...obj})
  }
  // stopped here on the filter, need to work on a searchJob name + location function
  return (
    <form onSubmit={handleSubmit}>
      <div className="search-bar">
        <div className="search-jobs-bar">
          <div>
            <SearchIcon style={{padding: '5px'}} />
          </div>
          <InputBase
            placeholder="Search for jobs.."
            className="search"
            style={{width: '100%'}}
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </div>
        <div className="search-location-bar">
          <div>
            <LocationOnIcon style={{padding: '5px'}} />
          </div>
          <InputBase
            placeholder="Search for location..."
            className="location"
            style={{width: '100%'}}
            value={location}
            onChange={event => setLocation(event.target.value)}
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onSubmit={handleSubmit}
          >
            Search
          </Button>
        </div>
      </div>
    </form>
  )
}

export default SearchBar
