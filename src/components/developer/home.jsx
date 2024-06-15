// import React from "react";
// import bike5 from "../assets/bike5.jpg"
// import reservenow from "../assets/reserve_now.png"
// import registershop from "../assets/register_shop.png"
// import bike3 from "../assets/bike3.png"
// import bike6 from "../assets/bike6.jpg"
// import srilanka from "../assets/SriLanka.png"
// import tickmark from "../assets/tickmark.png";
// import location from "../assets/location.png";
// import mobileapp from "../assets/mobile_app.png";
// import livechat from "../assets/live_chat.png";
// import filter from "../assets/filtering_feature.png";
// import mission from "../assets/Mission.png";
// import vision from "../assets/Vision.png";
// import invertedcomma from "../assets/inverted_comma.png";
// import invertedComma from "../assets/inverted.png";
// import person1 from "../assets/person1.png";
// import person2 from "../assets/person2.png";
// import person3 from "../assets/person3.png";
// import person4 from "../assets/person4.png";
// import person5 from "../assets/person5.png";
// import island from "../assets/earth.png";
// import realtime from "../assets/realtime.png"
// import reserve from "../assets/reserve.png";
// import multi from "../assets/multi.png";
// import history from "../assets/history.png";
// import star from "../assets/star.png";
// import { Carousel } from "react-bootstrap";
// import { useState, useEffect } from "react";
// import './home.css';
// import { useNavigate } from "react-router-dom";

// import CircularProgressBar from './CircularProgressBar';


// function Home() {
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setAnimate(true);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   const[activeIndicator,setActiveIndicator] =useState(0);

//   const handleCardHover = (index) =>{
//     setActiveIndicator(index);
//   };

//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleCardHovered =(index) =>{
//     setActiveIndex(index);
//   };
//   const navigate = useNavigate();
//   const handleReserveClick = () => {
//       navigate("/reservation");
//   }




//   return (
//     <div className="home-carousel">
//       <Carousel>
//         <Carousel.Item>
//           <img src={bike5} className="d-block w-100" alt="First slide" />
//           <Carousel.Caption>
//             <h1>BEST BOOKING SOFTWARE FOR MOTOR BIKE REPAIR SERVICES</h1>
//             <div className="button-container">
//               <button className="carousel-button" onClick={handleReserveClick}>Reserve Now
//                 <img src={reservenow}  alt="Reserve Now Icon" className="reserve-now-icon" />
//               </button>
//               <button className="carousel-button">Register Shop
//                 <img src={registershop} alt="Reserve Now Icon" className="reserve-now-icon" />
//               </button>
//             </div>
//           </Carousel.Caption>

//         </Carousel.Item>
//         <Carousel.Item>
//           <img src={bike6} className="d-block w-100" alt="Second slide" />

//           <Carousel.Caption>
//             <h1>REVITIALIZE YOUR BIKE WITH US</h1>
//             <div className="button-container">
//               <button className="carousel-button">Reserve Now
//                 <img src={reservenow} alt="Reserve Now Icon" className="reserve-now-icon" />
//               </button>
//               <button className="carousel-button">Register Shop
//                 <img src={registershop} alt="Reserve Now Icon" className="reserve-now-icon" />
//               </button>
//             </div>
//           </Carousel.Caption>

//         </Carousel.Item>
//         <Carousel.Item>

//           <img src={bike5} className="d-block w-100" alt="Third slide" />
//           <Carousel.Caption>
//             <h1>TRUSTED BIKE REPAIRS, READY RIDE!</h1>
//             <div className="button-container">
//               <button className="carousel-button">Reserve Now
//                 <img src={reservenow} alt="Reserve Now Icon" className="reserve-now-icon" />
//               </button>
//               <button className="carousel-button">Register Shop
//                 <img src={registershop} alt="Reserve Now Icon" className="reserve-now-icon" />
//               </button>
//             </div>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img src={bike5} className="d-block w-100" alt="First slide" />
//           <Carousel.Caption>
//             <h1>BEST BOOKING SOFTWARE FOR MOTOR BIKE REPAIR SERVICES</h1>
//             <div className="button-container">
//               <button className="carousel-button">Reserve Now
//                 <img src={reservenow} alt="Reserve Now Icon" className="reserve-now-icon" />
//               </button>
//               <button className="carousel-button">Register Shop
//                 <img src={registershop} alt="Reserve Now Icon" className="reserve-now-icon" />
//               </button>
//             </div>
//           </Carousel.Caption>
//         </Carousel.Item>

//       </Carousel>
//       <div className="home-body">
//         <img src={bike3} alt="Home body" className="home-body-image" />
//         <div className="home-body-text">
//           <p className="resetting-text">We&#39;re resetting bike care standards.</p>
//           <p>One service at a time.</p>
//           <div className="circles-container">
//             <CircularProgressBar label="10M+" animate={animate} />
//             <CircularProgressBar label="50M+" animate={animate} />

//           </div>

//         </div>
//         <div className="home-customer-text">
//           <p>Customers</p>
//           <p>Services</p>

//         </div>
//       </div>
//       <div class="search-container">
//         <input type="text" class="search-bar" placeholder="Search by City, District, or Zip Code" />
//         <button type="submit" class="search-button"><i class="fa fa-search"></i></button>

//         <div className="service-station-container">
//           <p className="service-station-text">1000+ Service Stations</p>
//         </div>
//         <div class="container">
//           <div class="card-container">
//             <div class="card">
//               <div class="details">
//                 <div class="column">
//                   <p className="text-heading">Velocare</p>
//                   <p>No.64, Galle Street, Colombo-06</p>
//                   <p>+94114554665</p>
//                   <p>
//                     <img src={location} alt="Location Image" />
//                     <a href="#" className="direction-link">Get Direction</a>
//                   </p>
//                 </div>
//                 <div class="details-content">
//                   <p>Opens daily 8.00 AM - 6.00 PM</p>
//                   <p><img src={tickmark} alt="Tick Mark" />Full services</p>
//                   <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
//                 </div>

//                 <div class="buttons">
//                   <button className="button-locate">Locate Now</button>
//                   <button className="button-reservation">Make a Reservation</button>
//                 </div>
//               </div>
//             </div>

//             <div class="card">
//               <div class="details">
//                 <div class="column">
//                   <p className="text-heading">VroomVille</p>
//                   <p>No 24 Main Street,
//                     Piyagama</p>
//                   <p>+94 26 555 4623</p>
//                   <p>
//                     <img src={location} alt="Location Image" />
//                     <a href="#" className="direction-link">Get Direction</a>
//                   </p>

//                 </div>
//                 <div class="details-content">
//                   <p>Opens daily 8.00 AM - 6.00 PM</p>
//                   <p><img src={tickmark} alt="Tick Mark" />Full services</p>
//                   <p><img src={tickmark} alt="Tick Mark" />Company Services</p>
//                   <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
//                 </div>

//                 <div class="buttons">
//                   <button className="button-locate">Locate Now</button>
//                   <button className="button-reservation">Make a Reservation</button>
//                 </div>
//               </div>
//             </div>

//             <div class="card">
//               <div class="details">
//                 <div class="column">
//                   <p className="text-heading">Asphalt Motors</p>
//                   <p>Homagama villa Street,
//                     Ambalangode-06</p>
//                   <p>+94 11 455 4665</p>
//                   <p>
//                     <img src={location} alt="Location Image" />
//                     <a href="#" className="direction-link">Get Direction</a>
//                   </p>
//                 </div>
//                 <div class="details-content">
//                   <p>Opens daily 8.00 AM - 6.00 PM</p>
//                   <p><img src={tickmark} alt="Tick Mark" /> Company Services only</p>
//                   <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
//                 </div>

//                 <div class="buttons">
//                   <button className="button-locate">Locate Now</button>
//                   <button className="button-reservation">Make a Reservation</button>
//                 </div>
//               </div>
//             </div>

//           </div>

//         </div>
//         <div class="srilanka-image-container">
//           <img src={srilanka} alt="Image" class="srilanka-image" />
//         </div>


//       </div>
//       <div className="services-container">
      
//         <p className="services-heading">Services We Offer</p>
//         <div  className="horizontal-scroll-container" data-ride="carousel">
//           <div className="card-horizontal" onMouseEnter={() => {handleCardHover(0); handleCardHovered(0)}}>
//           <img src={mobileapp} alt="Payment Options" />
//             <h3 className="card-title">Flexible Payment Options</h3>
//             <p className="card-text">Enjoy the freedom of flexible payment options. Pay online in advance during reservation or conveniently settle the bill after your bike is back in top-notch condition. Your choice, your convenience.</p>
//           </div>
//           <div  className="card-horizontal" onMouseEnter={() => {handleCardHover(1); handleCardHovered(1)}}>
//           <img src={mobileapp} alt="Mobile App" />
//             <h3 className="card-title">Mobile App Development</h3>
//             <p className="card-text">A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
//           </div>
//           <div className="card-horizontal" onMouseEnter={() =>{handleCardHover(2); handleCardHovered(2)}} >
//           <img src={livechat} alt="Live Chat" />
//             <h3 className="card-title">Live Chat Box</h3>
//             <p className="card-text">A live chat box on your website acts as a friendly guide in the digital realm, instantly connecting visitors with assistance. It's a modern tool that transforms your site into a responsive and approachable space, catering to the expectations of today's online audience.</p>
//           </div>
//           <div  className="card-horizontal" onMouseEnter={() => {handleCardHover(3); handleCardHovered(3)}}>
//           <img src={filter} alt="Filtering Feature" />
//             <h3 className="card-title">Filtering Feature</h3>
//             <p className="card-text">Filtering parts of the bike is like crafting a tailored experience for your vehicle's needs. It's about personalizing your bike service, ensuring it aligns seamlessly with the digital age's demand for precision and efficiency.</p>
//           </div>
//           <div  className="card-horizontal" onMouseEnter={() => {handleCardHover(4); handleCardHovered(4)}}>
//           <img src={livechat} alt="Service Progress" />
//             <h3 className="card-title">Service Progress System</h3>
//             <p className="card-text">Stay in the loop with real-time service progress updates. Our system keeps you informed every step of the way, ensuring transparency and peace of mind throughout the bike service </p>
//           </div>
          
//         </div>
//         <div className="carousel-indicator-slider">
//         <div className="custom-carousel-indicators">
//           {[...Array(5)].map((_, index) => (
//             <div key={index} className={`indicator ${activeIndicator === index ? 'active' : ''}`}></div>
//           ))}
//         </div>
//         <div className="carousel-number-slider">
//         <div className="carousel-number-slider">
//   <div className="services-slider-bar">
//     {[...Array(5)].map((_, index) => (
//       <div
//         key={index}
//         className={`slider-number ${activeIndex === index ? 'active' : ''}`}
//         onMouseEnter={() => handleCardHovered(index)}
//       >
//         {index + 1}
//       </div>
//     ))}
//   </div>
// </div>
//         </div>
//         </div>
//       </div>
//       <div className="vision-container">
    
      
//   <div>
//     <p className="vision-text">Our Vision</p>
//     <p className="vision-revolutionize">Revolutionizing Riding Experiences, One Reservation at a Time.</p>
//     <p className="vision-envision">We envision a future where every motorbike owner experiences<br />the thrill of the road without any concerns about maintenance or service.</p>

//   </div>
//   <div className="vision-img">
//     <img src={vision} alt="Vision"/>
//   </div>
 
// </div>
// <div className="mission-container">
// <div className="services-backimg"></div>

 
//   <div className="mission-content">
  
//     <div className="mission-img">
//       <img src={mission} alt="Mission"/>
//     </div>
//     <div>
//     <div className="mission-text">
//     <p>Our Mission</p>
//   </div>
//       <p className="mission-empower">Empowering Journeys, Connecting Riders.</p>
//       <p className="mission-innovative">Through innovative technology and a commitment to excellence, we aim to create a community where riders feel confident and inspired to explore their passion for two-wheel adventures.</p>
//     </div>
//   </div>
// </div>
// <div className="testimonial">

// <div className="testimonial-heading">
// <p>Why Our Services Capture <br></br>Hearts and Pedals</p>

// </div>
//             <p className="testimonial-text">
//               <img src={invertedcomma} alt="Inverted Comma" className="inverted-comma"/> 
//               Undoubtedly, I highly recommend BikePulse as one of the <br></br> premier platforms for bike services.
//               It stands out as one of the <br></br> finest in the industry.
//               I wouldn't hesitate to recommend this<br></br> exceptional platform to anyone in need of top-notch bike<br></br> services.
//               <img src={invertedComma} alt="Inverted Comma" className="inverted-comma"/> 
//             </p>
//           </div>
//           <div className="people-images">
          
//             <div className="person">
//               <img src={person1} alt="Person 1" className="rounded-image"/>
//               <div className="stars">
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//               </div>
//               <p className="person-name">Nithiw</p>
//               <p className="shop-name">VeloCare</p>
//             </div>
//             <div className="person">
//               <img src={person2} alt="Person 2" className="rounded-image"/>
//               <div className="stars">
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//               </div>
//               <p className="person-name">Rusiru</p>
//               <p className="shop-name">SpinFix</p>
//             </div>
//             <div className="person">
//               <img src={person3} alt="Person 3" className="rounded-image"/>
//               <div className="stars">
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//               </div>
//               <p className="person-name">Praveen</p>
//               <p className="shop-name">VeloCare</p>
//             </div>
//             <div className="person">
//               <img src={person3} alt="Person 4" className="rounded-image"/>
//               <div className="stars">
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//               </div>
//               <p className="person-name">DeSilva</p>
//               <p className="shop-name">RapidRide</p>
//             </div>
//             <div className="person">
//               <img src={person1} alt="Person 5" className="rounded-image"/>
//               <div className="stars">
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//                 <img src={star} alt="Star" className="star" />
//               </div>
//               <p className="person-name">DeSilva</p>
//               <p className="shop-name">RapidRide</p>
//             </div>

   
// </div>
//  <section className="services-footer">
 


//       <div className="services-footer-container">
//         <div className="service-item">
//           <img src={island} alt="Island Research" />
//           <p>Island Research</p>
//         </div>
//         <div className="service-item">
//           <img src={realtime} alt="Realtime Update" />
//           <p>Realtime Update</p>
//         </div>
//         <div className="service-item">
//           <img src={reserve} alt="Reservation Management" />
//           <p>Reservation Management</p>
//         </div>
//         <div className="service-item">
//           <img src={multi} alt="Multishop Locations" />
//           <p>Multishop Locations</p>
//         </div>
//         <div className="service-item">
//           <img src={history} alt="Reservation History" />
//           <p>Reservation History</p>
//         </div>
//       </div>
//     </section>





      

//     </div>

//   );
// }

// export default Home;