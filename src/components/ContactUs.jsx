import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contactus-container">
            <div className="contactus-content">
                <div className="contactus-left-side">
                    <div className="contactus-address contactus-details">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="contactus-topic">Address</div>
                        <div className="contactus-text-one">Colombo 05</div>
                        <div className="contactus-text-two">Sri Lanka</div>
                    </div>
                    <div className="contactus-phone contactus-details">
                        <i className="fas fa-phone-alt"></i>
                        <div className="contactus-topic">Phone</div>
                        <div className="contactus-text-one">+9477 9893 564</div>
                        <div className="contactus-text-two">+9477 3434 567</div>
                    </div>
                    <div className="contactus-email contactus-details">
                        <i className="fas fa-envelope"></i>
                        <div className="contactus-topic">Email</div>
                        <div className="contactus-text-one">bikepulse@gmail.com</div>
                        <div className="contactus-text-two">info.bikepulse@gmail.com</div>
                    </div>
                </div>
                <div className="contactus-right-side">
                    <div className="contactus-topic-text">Send us a message</div>
                    <p>Have questions or need assistance? We're here to help! Feel free to reach out to us using the form below, and we'll get back to you as soon as possible</p>
                    <form action="#">
                        <div className="contactus-input-box">
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div className="contactus-input-box">
                            <input type="text" placeholder="Enter your email" />
                        </div>
                        <div className="contactus-input-box contactus-message-box">
                            <textarea placeholder="Enter your message"></textarea>
                        </div>
                        <div className="contactus-button">
                            <input type="button" value="Send Now" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
