import React, { useEffect, useRef ,useState } from 'react';
import './Home.css'; 
import card1 from "../assets/service1.jpg";
import reservenow from "../assets/reserve_now.png"
import registershop from "../assets/register_shop.png"
import $ from 'jquery';
import 'jquery.counterup';
import Waypoint from 'waypoints/lib/noframework.waypoints.min.js';
import { faFacebookF, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


import { faQuoteLeft, faStar as solidStar, faStarHalfAlt as halfStar, faStar as farStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import person1 from "../assets/person1.png";
import ellie from "../assets/Ellie_Anderson.jpg"
import john from "../assets/John_Morgan.jpg"
import nia from "../assets/Nia_Adebayo.jpg"
import rigo from "../assets/Rigo_Louie.jpg"

import { useNavigate } from "react-router-dom";

//import '../../node_modules/swiper/swiper-bundle.min.js';
//import '../../node_modules/swiper/swiper-bundle.min.css';

//import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from 'axios';


//import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import backgroundclip from '../assets/vid.mp4';



function Home() {

  const navigate = useNavigate();

  const handleAboutButtonClick = () => {
    navigate("/aboutus");
};

const handleReserveClick = () => {
  navigate("/Reservation");
};

const handleRegisterClick = () => {
  navigate("/registershop");
};

//   useEffect(() => {
//     const swiper = new Swiper('.slide-content', {
//         slidesPerView: 3,
//         spaceBetween: 25,
//         loop: true,
//         centerSlide: true,
//         fade: true,
//         grabCursor: true,
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//             dynamicBullets: true,
//         },
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//         },
//         breakpoints: {
//             0: {
//                 slidesPerView: 1,
//             },
//             520: {
//                 slidesPerView: 2,
//             },
//             950: {
//                 slidesPerView: 3,
//             },
//         },
//     });
//     return () => {
//       swiper.destroy(); 
//   };
// }, []);



const [shops, setShops] = useState([
  { shopId: 1, shopName: 'Shop 1', shopAddress: 'Location 1',contactNumber:'+94 11 455 4665', openingHours: 'Opens daily 8.00 AM - 6.00 PM',services: ['Company Services only', 'Repair & Maintenance'],},
  { shopId: 2, shopName: 'Shop 2', shopAddress: 'Location 2',contactNumber: '+94 11 455 6650', openingHours: 'Opens daily 8.00 AM - 6.00 PM', services: ['Full services', 'Repair & Maintenance'], },
  { shopId: 3, shopName: 'Shop 3', shopAddress: 'Location 3',contactNumber: '+94 26 555 4623', openingHours: 'Opens daily 8.00 AM - 6.00 PM', services: ['Full services', 'Company Services', 'Repair & Maintenance'], },
  { shopId: 4,shopName: 'Shop 4', shopAddress: 'Location 4',contactNumber: '+94 77 123 4567', openingHours: 'Opens daily 9.00 AM - 7.00 PM', services: ['Full services', 'Repair & Maintenance'],},
  { shopId: 5, shopName: 'Shop 5', shopAddress: 'Location 5', contactNumber: '+94 71 987 6543', openingHours: 'Opens daily 9.00 AM - 7.00 PM', services: ['Company Services only'],}
]);


useEffect(() => {
  fetchShopData();
  fetchFeedbackData();
}, []);


const fetchShopData = async () => {
  try {
    // Example using axios:
    const response = await axios.get('http://localhost:8095/shop/getShop');
    setShops(response.data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
const fetchFeedbackData = async () => {
  try {
    // Example using axios:
    const response = await axios.get('http://localhost:8095/shop/getShop');
    setShops(response.data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};


  return (
    <div className='homen-page-container'>
   
    <div className='homen-banner'>
    <div className='homen-container'>
    <div className='homen-text'>
    <h1>Motor Bike Service Reservation Center</h1>
    <h1></h1> <h1></h1> <h1></h1> <h1></h1> <h1></h1> 
        {/* <p>Introducing BikePulse, the premier online platform revolutionizing bike rentals and services. <br>
          </br>Seamlessly blending convenience with quality, BikePulse offers a diverse array of meticulously maintained bikes for every rider, from urban explorers to outdoor enthusiasts. With our intuitive reservation system, users can effortlessly book their ideal bike,<br>

          </br> selecting from a curated selection tailored to their preferences. Beyond rentals, BikePulse provides comprehensive service options, ensuring bikes are always in peak condition. <br>
            
          </br>Backed by a commitment to excellence, BikePulse redefines the cycling experience, empowering riders to explore with confidence and ease.</p> */}
        <div className='homen-button'>
           
            <a href='http://localhost:3004/' > REGISTER SHOP 
            <img src={registershop} alt="Reserve Now Icon" className="reserve-now-icon" onClick={handleRegisterClick} /></a>
            <a href='/Reservation'>RESERVE NOW
            <img src={reservenow}  alt="Reserve Now Icon" className="reserve-now-icon" onClick={handleReserveClick}/></a>
        </div>
    </div>
    
    </div>
    </div>
    <div className="cards-container-wrapper">
  <div className="cards-container">
    {shops.slice(0, Math.ceil(shops.length / 2)).map((shop) => (
      <div key={shop.shopId} className="card">
        <div className="img-box">
          <img src={require('../assets/bike9.jpg')} alt="Card1" />
        </div>
        <h1 className="card-heading">{shop.shopName}</h1>
        <p>
          <i className="fa fa-location-arrow" aria-hidden="true" /> {shop.shopAddress}
        </p>
        <p>
          <i className="fa fa-phone" aria-hidden="true" /> {shop.contactNumber}
        </p>
        <p>
          <img src={require('../assets/location.png')} alt="Location Image" />
          <a href="#" className="direction-link">Get Direction</a>
        </p>
        <div className="details-content">
          {/* Additional shop details here */}
        </div>
      </div>
    ))}
  </div>
  
  <div className="cards-container">
    {shops.slice(Math.ceil(shops.length / 2)).map((shop) => (
      <div key={shop.shopId} className="card">
        <div className="img-box">
          <img src={require('../assets/bike9.jpg')} alt="Card1" />
        </div>
        <h1 className="card-heading">{shop.shopName}</h1>
        <p>
          <i className="fa fa-location-arrow" aria-hidden="true" /> {shop.shopAddress}
        </p>
        <p>
          <i className="fa fa-phone" aria-hidden="true" /> {shop.contactNumber}
        </p>
        <p>
          <img src={require('../assets/location.png')} alt="Location Image" />
          <a href="#" className="direction-link">Get Direction</a>
        </p>
        <div className="details-content">
          {/* Additional shop details here */}
        </div>
      </div>
    ))}
  </div>
</div>

    <div className='home-about-container'>
    <div className='parallax-1'>
    <div className='parallax-inner'>
    <div className='home-about-text'>
      <h1>About Us<br></br><span>WE OVER 20 YEARS EXPERIENCE</span></h1>
      <p>At BikePulse, we're passionate about cycling and dedicated to enhancing the biking experience for riders everywhere. <br></br>Founded with a vision to promote sustainability and active living, BikePulse is more than just a rental and service platform; it's a community-driven hub for cyclists of all levels.<br></br> Our team of cycling enthusiasts brings years of expertise to curate a collection of top-quality bikes and deliver unparalleled service.<br></br> Whether you're commuting through the city streets or embarking on a weekend adventure, BikePulse is here to support you every step of the way. <br></br>Join us in our mission to inspire and enable more people to embrace the joy of biking while fostering a healthier, happier planet. Welcome to BikePulse, where every ride is an adventure waiting to happen.</p>
    </div>
    <button className='homeabout-button' onClick={handleAboutButtonClick }>ABOUT US</button>

 
    </div>
    </div>
    </div>
    <div className='counter-up' >
      <div className='counter-content'>
      <div className='counter-box'>
        <div className='counter-icon'><i className='fa fa-history'></i> </div>
        <p className='counter'>724</p>
        <p className='counter-text'>Working hours</p>
        </div>
        <div className='counter-box'>
        <div className='counter-icon'><i className='fa fa-history'></i> </div>
        <p className='counter'>724</p>
        <p className='counter-text'>Working hours</p>
        </div>
        <div className='counter-box'>
        <div className='counter-icon'><i className='fa fa-gift'></i> </div>
        <p className='counter'>120</p>
        <p className='counter-text'>Award Recieved</p>
        </div>
        <div className='counter-box'>
        <div className='counter-icon'><i className='fa fa-users'></i> </div>
        <p className='counter'>190</p>
        <p className='counter-text'>Happy Customers</p>
        </div>
      </div>
    </div>
    
    <p className='testimonial'>Testimonials</p>
    <p className='testimonial-client-text'>WHAT ARE CLIENTS SAY</p>
    <div className="wrapper-testimonial">
      {/* {testimonialData.map(testimonial => (
        <div key={testimonial.testid} className="box-testimonial">
          <FontAwesomeIcon icon={faQuoteLeft} className="quote" />
          <p>"{testimonial.quote}"</p>
          <div className="content-testimonial">
            <div className="info-testimonial">
              <div className="name-testimonial">{testimonial.testname}</div>
              <div className="job-testimonial">{testimonial.jobTitle}</div>
              <div className="stars-testimonial">{renderStars(testimonial.rating)}</div>
            </div>
          </div>
          <div className="image-testamonial">
            <img src={card1} alt="Profile" />
          </div>
        </div>
      ))} */}
      
        <div className="box-testamonial">
        <FontAwesomeIcon icon={faQuoteLeft} className="quote" />

          <p>"What I love most about BikePulse is their all-in-one approach. Not only can I easily rent a bike for my weekend adventures, but I can also schedule repairs through their online platform. It's incredibly convenient and saves me so much time. BikePulse has definitely become my go-to for all things cycling!"</p>
          <div className="content-testamonial">
            <div className="info-testamonial">
              <div className="name-testamonial">John Doe</div>
              <div className="job-testamonial">Job Title</div>
              <div className="stars-testamonial">
              <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={farStar} />
              </div>
            </div>
            <div className="image-testamonial">
              <img src={card1} alt="Profile" />
            </div>
          </div>
        </div>
      <div className="box-testamonial">
      <FontAwesomeIcon icon={faQuoteLeft} className="quote" />

        <p>"BikePulse has made managing my bike repairs a breeze. Their platform connects me with trusted service shops, and I can easily schedule appointments and track the progress of my repairs. It's a game-changer!"</p>
        <div className="content-testamonial">
          <div className="info-testamonial">
            <div className="name-testamonial">John Doe</div>
            <div className="job-testamonial">Job Title</div>
            <div className="stars-testamonial">
            <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={farStar} />
            </div>
          </div>
          <div className="image-testamonial">
            <img src={card1} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
    {/* <div className="slide-container swiper">
            <div className="slide-content">
                <div className="card-wrapper swiper-wrapper">
                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>
                            <div className="card-image">
                                <img src={person1} alt='Testimonial'/>
                            </div>
                        </div>
                        <div className="card-content">
                            <h2 className="name">David Dell</h2>
                            <p className="description">"I'm blown away by the convenience of the BikePulse mobile app. Booking repair appointments is quick and easy, and I love being able to track the status of my repairs in real-time. It's like having a personal mechanic in my pocket!"</p>
                            <button className="button-view">View More</button>
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>
                            <div className="card-image">
                                <img src={ellie} alt='Testimonial'/>
                            </div>
                        </div>
                        <div className="card-coshopt">
                            <h2 className="name">David Dell</h2>
                            <p className="description">"Thanks to BikePulse, finding reputable bike service shops has never been easier. Their platform makes it simple to discover and connect with top-notch repair centers, ensuring my bike is always in tip-top shape."</p>
                            <button className="button-view">View More</button>
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>
                            <div className="card-image">
                                <img src={rigo} alt='Testimonial'/>
                            </div>
                        </div>
                        <div className="card-content">
                            <h2 className="name">David Dell</h2>
                            <p className="description">"BikePulse's online payment system has made handling repair costs a breeze. I can pay securely through the app, saving me time and hassle. It's just one more way BikePulse has simplified my cycling experience."</p>
                            <button className="button-view">View More</button>
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>
                            <div className="card-image">
                                <img src={nia} alt='Testimonial'/>
                            </div>
                        </div>
                        <div className="card-content">
                            <h2 className="name">David Dell</h2>
                            <p className="description">"I'm impressed by the level of transparency BikePulse provides. Being able to track the progress of my repairs gives me peace of mind, knowing exactly what's happening every step of the way."</p>
                            <button className="button-view">View More</button>
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>
                            <div className="card-image">
                                <img src={john} alt='Testimonial'/>
                            </div>
                        </div>
                        <div className="card-content">
                            <h2 className="name">David Dell</h2>
                            <p className="description">"BikePulse has made it so easy for me to find and book repair appointments. Their user-friendly interface and intuitive design make the whole process seamless and stress-free."</p>
                            <button className="button-view">View More</button>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            
            <div className="swiper-button-next swiper-navBtn"></div>
            <div className="swiper-button-prev swiper-navBtn"></div>
            <div className="swiper-pagination"></div>  
        
          
        </div> */}
        <div className='parallax-1'>
          <div className='parallax-inner'>
          <div className='service-cards-container'>
          <div className='service-card'>
          <div className='service-card-content'>
          <p className='service-card-heading'>Instant Motor Bike Repair</p>
          <i className="fa fa-wrench fa-lg" aria-hidden="true"></i>
          <p>Instant Bike repair without being delayed</p>
         
          </div>
          </div>
          <div className='service-card'>
          <div className='service-card-content'>
          <p className='service-card-heading'>Easy Reservation through Mobile App</p>
          <i className="fa fa-mobile fa-lg" aria-hidden="true"></i>
          <p>Mobile App provides a big handrail to maake the reservation done smoothly</p>
          </div>
          </div>
          <div className='service-card'>
          <div className='service-card-content'>
          <p className='service-card-heading'>Flexible Payment Options </p>
          <i className="fa fa-cc-mastercard fa-lg" aria-hidden="true"></i>
          <p>Enjoy the freedom of flexible payment options. Pay online in advance during reservation or conveniently settle the bill after your bike is back in top-notch condition. Your choice, your convenience.</p>
          </div>
          </div>
          <div className='service-card'>
          <div className='service-card-content'>
          <p className='service-card-heading'>Live Chat Box</p>
          <i className="fa fa-comments fa-lg" aria-hidden="true"></i>
          <p>A live chat box on your website acts as a friendly guide in the digital realm, instantly connecting visitors with assistance. It's a modern tool that transforms your site into a responsive and approachable space, catering to the expectations of today's online audience</p>
          </div>
          </div>
          <div className='service-card'>
          <div className='service-card-content'>
          <p className='service-card-heading'>Progress Tracking</p>
          <i className="fa fa-line-chart fa-lg" aria-hidden="true"></i>
          <p>Stay in the loop with real-time service progress updates. Our system keeps you informed every step of the way, ensuring transparency and peace of mind throughout the bike service </p>
          </div>
          </div>
          <div className='service-card'>
          <div className='service-card-content'>
          <p className='service-card-heading'>Filtering Feature</p>
          <i className="fa fa-filter fa-lg" aria-hidden="true"></i>
          <p>Filtering parts of the bike is like crafting a tailored experience for your vehicle's needs. It's about personalizing your bike service, ensuring it aligns seamlessly with the digital age's demand for precision and efficiency.</p>
          </div>
          </div>
        </div>

          </div>
        </div>
        <div className='video-container'>
        <video autoPlay loop muted plays-inline src={backgroundclip} className='background-clip'>
          <source src={backgroundclip} type='video/mp4'/>
        </video>
        <div className='video-content'>
          <h1>Explore More</h1>
          <a href='#' >Start Searching</a>
        </div>

        </div>

        
        
    </div>



  );
}




export default Home;
