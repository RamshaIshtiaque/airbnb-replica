import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const TopPage = () => {
  return (
    <div>
        <div className='above_header'>
        <h5>Plan a different kind of getaway to uncover the hidden gems near you!</h5>
        <Link to='/search'>
            <Button className='explore_button' variant='outlined'>Explore Nearby</Button>
        </Link>
      </div>
    </div>
  )
}

export default TopPage