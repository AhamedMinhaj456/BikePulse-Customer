import React from "react";
import footerlogo from "../assets/Logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import { faFacebookF, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4>Company</h4>
          <ul class="links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shops</a></li>
            <li><a href="#">Promotions</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <ul className="links">
            <li><a href="#">Auto Repairs near me</a></li>
            <li><a href="#">Top Cities</a></li>
            <li><a href="#">All Cities</a></li>
            <li><a href="#">Shop instructions</a></li>
            
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="links">
            <li><a href="#">Customer Agreement</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">GDPR</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Media Kit</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose
            of news, updates, helpful tips, and
            exclusive offers.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required/>
            <button className="subscribe-button" type="submit">SUBSCRIBE</button>
          </form>
          <div className="icons">
          <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
