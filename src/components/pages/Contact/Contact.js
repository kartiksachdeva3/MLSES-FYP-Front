import React from 'react';
import './Contact.css';
import { Button } from '../../Button';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          If you any question regarding the MLSES.
        </p>
        <p className='footer-subscription-text'>
          Enter your email, we will write back.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Submit</Button>
          </form>
        </div>
      </section>
      </div>
  );
}

export default Footer;