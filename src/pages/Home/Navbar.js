import React, { useState} from "react";
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {teal } from '@material-ui/core/colors';
import { Link } from "react-router-dom";
import style from './Navbar.module.css';
import { GiWheat } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
    '&:hover': {
      backgroundColor: teal[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


function Navbar() {

  const classes = useStyles();
  const [click, setClick] = useState(false);
 

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
  };
  



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
            <ul className= {click ?  `${style.navMenu} ${style.active} `  : style.navMenu } >
              <li className={style.navItem}>
                <Link to="/" className={style.navLinks} onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className={style.navItem}>
                <a href="#Vision" className={style.navLinks}>
                  Vision
                </a>
              </li>
              <li className={style.navItem}>
                <a href="#About" className={style.navLinks}>
                  About
                </a>
              </li>

              <li className={style.navBtn}>
              <Link to= "/login" ><ColorButton  variant="contained" color="primary" className={classes.margin}>
                Login
              </ColorButton>
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
