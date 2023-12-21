import React, {useState} from 'react'
import Button from '@mui/material/Button';
import SearchDates from './SearchDates';


const DatesButton = () => {
    const [showSearch, setShowSearch] = useState(false);
    return (
    <>
        <div className='date_picker'>
            {showSearch && <SearchDates/>}
        </div>
        
        <div className='button'>
            <Button 
                variant='outlined' 
                className='search_button'
                onClick={() => setShowSearch(!showSearch)}>
                {showSearch ? 'Hide' : 'Search Dates'}
            </Button>
        
        </div>
        
    </>
  )
}

export default DatesButton
