import React from 'react'
import { Button } from '@mui/material';
import SearchResultContainer from './SearchResult';

const SearchPage = () => {
  return (
    <div className='searchPage'>
      <div className='searchPage_info'>
          <p>62 stays &bull; 21 December to 30 December &bull; 2 guest</p>
          <h1>Stays nearby</h1>
          <Button variant="outlined">Cancellation Flexibility</Button>
          <Button variant="outlined">Type of place</Button>
          <Button variant="outlined">Price</Button>
          <Button variant="outlined">Rooms and beds</Button>
          <Button variant="outlined">More filters</Button>
      </div>

      <SearchResultContainer/>
    </div>
  )
}

export default SearchPage