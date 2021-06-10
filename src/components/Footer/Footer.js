import React from 'react';
import { Link } from 'react-router-dom';
import GreenButton from '../Buttons/Button'

import style from './Footer.module.css';


function Footer() {
  return (
    <div className={style.footerContainer}>
       <Link to= "/signup" ><GreenButton color="inherit">Register Now!!</GreenButton>
              </Link>
      <small className={style.websiteRights}>MLSMES © 2021</small>
          
    </div>
  );
}

export default Footer;