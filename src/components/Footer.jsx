import React from "react";
import footerlogo from "../assets/Logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import { faFacebookF, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";


import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4>Company</h4>
          <ul class="links">
          <li><Link to="/">Home</Link></li>
            <li><Link to="/shops">Shops</Link></li>
            <li><Link to="/promotions">Promotions</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <ul className="links">
            <li><Link to="/aboutus">Auto Repairs near me</Link></li>
            <li><Link to="/aboutus">Top Cities</Link></li>
            <li><Link to="/aboutus">All Cities</Link></li>
            <li><Link to="/aboutus">Shop instructions</Link></li>
            
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="links">
            <li><Link to="/aboutus">Customer Agreement</Link></li>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
            
            <li><Link to="/aboutus">Security</Link></li>
            <li><Link to="/aboutus">Testimonials</Link></li>
          
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
