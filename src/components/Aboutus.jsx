import React from 'react';
import './Aboutus.css';
import {Link} from 'react-router-dom';
import {Alert} from "react-bootstrap";



const About = () => {
  return (
    <div>
     
     
      {/* AboutUs Content      */}
      <div className="aboutus-container">
        <div style={{ width: "90%", margin: "0 auto" }}>
          <br />
          <br />
          <Alert variant="light" style={{ width: "95%" }}>
            <Alert.Heading>
              <b>What is BikePulse ? </b>
            </Alert.Heading>
            <hr />
            <p>
              <br />
              Bike Pulse revolutionizes bike service management with an all-in-one platform that empowers shops and users alike. Easily book reservations, make online payments, and track your bike's service status in real-time through a user-friendly dashboard.
              <hr />
            </p>
          </Alert>
          <Alert variant="light" style={{ width: "95%" }}>
            <Alert.Heading>
              <b>Our Journey</b>
            </Alert.Heading>
            <hr />
            <p>
              <br />
              From a small team of bike enthusiasts to a leading platform connecting bike owners and service providers, our journey has been fueled by a passion for innovation and excellence.
            </p>
            <hr />
          </Alert>
          <Alert variant="light  " style={{ width: "95%" }}>
            <Alert.Heading>
              <b>Our Team</b>
            </Alert.Heading>
            <hr />
            <p>
              <br />
              Our team is a dedicated group of industry professionals and bike enthusiasts committed to delivering exceptional service and innovative solutions for the cycling community.
            </p>
            <hr />
          </Alert>

          <Alert variant="light" style={{ width: "95%" }}>
            <Alert.Heading>
              <b>Our Commitment </b>
            </Alert.Heading>
            <hr />
            <p>
              <br />
              Our commitment is to provide a seamless and efficient bike service experience, ensuring every customer receives top-quality care and convenience at every touchpoint.
            </p>
            <hr />
          </Alert>
          
        </div>
      </div>
      
      {/* Element */}
    
    </div>
  );
};

export default About;
