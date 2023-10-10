import React from 'react';
import './Footer.css';
import gps from './header-images/gps-icon.png';
import call from './header-images/call-icon.png';
import email from './header-images/email-icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerSection_01'>
        <div className='aboutPlus__social-media'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries....</p>
          <div className='socialMedia_icon' >
            <div className='Icon-media facebook'><i className="fa fa-facebook-f"></i></div>
            <div className='Icon-media twitter'><i class="fa fa-twitter"></i></div>
            <div className='Icon-media instagram'><i class="fa fa-instagram"></i></div>
            <div className='Icon-media linkedin'><i class="fa fa-linkedin"></i></div>
            <div className='Icon-media pinterest'><i class="fa fa-pinterest"></i></div>
          </div>
        </div>
        <div className='onlineShopping'>
          <h3>ONLINE SHOPPING</h3>
          <ul>
            <li>Men’s T-Shirts</li>
            <li>Women’s Wear</li>
            <li>Winter Collections</li>
            <li>Hooded T-Shirts</li>
            <li>Streetwear Collections</li>
          </ul>
        </div>
        <div className='onlineShopping onlineshopping01'>
        <h3>CUSTOMER POLICIES</h3>
          <ul>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Shipping & Returns Policy</li>
            <li>Cancellations & Refund Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='storeInformation onlineshopping02'>
          <h3>STORE INFORMATION</h3>
          <div className='contact'>
            <img src={gps}/> 
            <div className='content'>lorem lpsum is simply dummy text of the printing and typesetting industry.</div>
          </div>
          <div className='contact'>
            <img src={call} />
            <div className='content'>Contact Us: 1234567890</div>
          </div>
          <div className='contact'>
            <img src={email} />
            <div className='content'>Email Us:info@yourmail.com</div>
          </div>
        </div>
      </div>
      <div className='footerSection_02'>
      ©2022-23 Powered By dummy team
      </div>

    </div>
  )
}

export default Footer;