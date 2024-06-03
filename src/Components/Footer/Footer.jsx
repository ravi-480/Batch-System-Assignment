import React from 'react';
import './Footer.css';  // Ensure you have the CSS file imported

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="section">
        <div className="contact">
          <div className="content">
            <div className="tm">
            </div>
            <div className="details">
              <div className="text">help@frybix.com</div>
              <div className="text">+1 234 456 678 89</div>
            </div>
          </div>
        </div>
        <div className="links">
          <h2>links</h2>
          <div className="link-item">home</div>
          <div className="link-item">about us</div>
          <div className="link-item">bookings</div>
          <div className="link-item">blog</div>
        </div>
        <div className="legal">
          <h2>legal</h2>
          <div className="link-item">terms of use</div>
          <div className="link-item">privacy policy</div>
          <div className="link-item">cookie policy</div>
        </div>
        <div className="product">
          <h2>product</h2>
          <div className="link-item">take tour</div>
          <div className="link-item">live chat</div>
          <div className="link-item">reviews</div>
        </div>
        <div className="newsletter">
          <h2>Newsletter</h2>
          <div className="link-item">Stay up to date</div>
          <div className="newsletter-form">
            <div className="email-input">
              <input type="text" placeholder='Your email' />
            </div>
            <button className="subscribe-button">
              <div className="text">Subscribe</div>
            </button>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <div className="text">Copyright 2022 uifry.com all rights reserved</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
