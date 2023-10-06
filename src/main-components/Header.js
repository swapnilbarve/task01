import React from 'react';
import "./Header.css";
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className='Header'>
        <div className='topHeader'>
        <div className='topHeader-info'>
                <div className='topHeader-Heading'>
                    <h4>Welcome To Our Store Hiscraves</h4>
                </div>
                <div className='topheader-contact'>
                    <i class="fa fa-phone"></i><span>Call us:1234567890</span>
                </div>
            </div>
        </div>

        <Navbar />
      
        
    </div>
  )
}

export default Header;