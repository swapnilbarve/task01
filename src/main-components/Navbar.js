import React from 'react';
import "./Header.css";
import menu from './header-images/menu-icon.png';
import search from './header-images/search-icon.png';
import like from './header-images/like.png';
import shoppingcart from './header-images/shoppingcart.png';
import profile from './header-images/profile.png';

const Navbar = () => {
  return (
  
    <div className='navbar'>
        <div className='nav-item'>
                <div className='hamburger-menu'>
                   <img src={menu} />
                </div>
                <div className='logo'>
                   <h5>Logo Here</h5>
                </div>
                <div className='info_list'>
                   <ul>
                    <li>
                    <img src={search} />
                    </li>
                    <li>
                    <img src={like} />
                    </li>
                    <li>
                    <img src={shoppingcart} />
                    </li>
                    <li>
                    <img src={profile} />
                    </li>
                   </ul>
                </div>
        </div>
    </div>

  )
}

export default Navbar;