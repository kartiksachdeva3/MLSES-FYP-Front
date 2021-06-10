import React, { useState, useEffect} from "react";
import style from './Navbar.module.css';
import { GiWheat } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import GreenButton from '../Buttons/Button'

import { Link } from "react-router-dom";



const Navbar = ({element}) => {


  const [click, setClick] = useState(false);
  const [buttons, setButton] = useState(true);

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
    window.addEventListener("resize", showButton);
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={style.navbar}>
          <div className={`${style.navbarContainer} ${style.container}`}>
            <Link to="/" className={style.navbarLogo} onClick={closeMobileMenu}>
              <GiWheat className={style.navbarIcon} />
              MLSMES
            </Link>
            <div className={style.menuIcon} onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className= {click ?  style.navMenuActive  : style.navMenu } >
              <li className={style.navItem}>
                <a href="/#home" className={style.navLinks} onClick={closeMobileMenu}>
                  Home
                </a>
              </li>
              <li className={style.navItem}>
                <a href="/#Vision" className={style.navLinks}>
                  Vision
                </a>
              </li>
              <li className={style.navItem}>
                <a href="/#About" className={style.navLinks}>
                  About
                </a>
              </li>

             <li className={element=== 'login' ? `${style.navBtn} ${style.login}`: style.navBtn } >
                
              <Link to= "/login" ><GreenButton color="inherit">Login</GreenButton>
              </Link>
              
              </li>
            </ul>  
            
            
            
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}





export default Navbar;
