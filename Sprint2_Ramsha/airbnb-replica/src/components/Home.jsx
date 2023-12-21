import React from 'react'
import DatesButton from './DatesButton';
import Card from './Card';

const Home = () => {
  return (
    <div className='home'>
        <DatesButton/>

        <div className='home_section'>
        <Card/>
        </div>
    </div>
  )
}

export default Home