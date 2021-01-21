import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { GiWheat} from 'react-icons/gi';
import {BiUserCircle} from 'react-icons/bi';
import {AiFillSetting} from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
  
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <div className='navbar-logo' onClick={closeMobileMenu}>
              <GiWheat className='navbar-icon' />
              MLSES
            </div>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'
                 onClick={closeMobileMenu}>
                <BiUserCircle className='navbar-icon'/>
                  User
              </li>
              <li className='nav-item'
               
                  onClick={closeMobileMenu}
                >
                <AiFillSetting className='navbar-icon'/>
                  Setting 
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;