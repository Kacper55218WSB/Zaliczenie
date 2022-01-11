import React from 'react';
import './Footer.css';
import { Button } from '../../../Button';
import { HashLink as Link } from 'react-router-hash-link'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { GiBiceps } from 'react-icons/gi';

//Treść stopki

function Footer() {
  return (
    <div className='footer-container' id='footer'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Jeżeli chcesz zostać Giga chadem lub dowiedzieć się wiecej, zgłoś się tutaj!
        </p>
        <p className='footer-subscription-text'>
          Zawsze możesz odejść, pytanie czy dasz radę...
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Twój Email brachu...'
            />
            <Button buttonStyle='btn--outline'>Wyślij zgłoszenie</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={'//www.instagram.com/giga.chad_/'}>Instagram</Link>
            <Link to={'//www.facebook.com/GigaChad-P-O-S-T-I-N-G-110869557889317'}>Facebook</Link>
            <Link to={'//www.youtube.com/watch?v=Ux5cQbO_ybw&ab_channel=FritteX-Shitpost'}>Youtube</Link>
            <Link to={'//twitter.com/search?q=%23gigachad'}>Twitter</Link>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <GiBiceps className='navbar-icon' />
              GIGA STRONA
            </Link>
          </div>
          <small className='website-rights'>XD © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={'//www.facebook.com/GigaChad-P-O-S-T-I-N-G-110869557889317'}
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to={'//www.instagram.com/giga.chad_/'}
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={'//www.youtube.com/watch?v=Ux5cQbO_ybw&ab_channel=FritteX-Shitpost'}
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to={'//twitter.com/search?q=%23gigachad'}
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;