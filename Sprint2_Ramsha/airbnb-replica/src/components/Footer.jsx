import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='footer'>
        <p>&copy; Airbnb, Inc. &bull; Privacy &bull; Terms &bull; Sitemap</p>

        <div className='footer_right1'>
            <LanguageIcon className='footer_icon1'/>
            <p>English (CA) </p>
        

            <div className='footer_right2'>
            <FacebookIcon style={{ marginRight: '10px', marginLeft: '20px' }}/>
            <TwitterIcon style={{ marginRight: '10px' }}/>
            <InstagramIcon style={{ marginRight: '10px' }}/>
            </div>
        </div>
    </div>
  )
}

export default Footer