// import React from "react";
// import './Reservation.css';
// import date from "../assets/date.png";
// import time from "../assets/time.png";
// import Rightbar from "./RightBar";
// import verification from "../assets/verification.png";

// function Reservation(){
//     return(
//         <div className="reservation-container">
//         <div className="reservation-background"></div>
//             <Rightbar/>
//             <div className="reservation-form">
//             <p className="suggestion-form-text">Get Started</p>
//             <p className="resrvation-form-text">Personal Information</p>
//             <div className="personal-info">
//             <div className="input-group-reserve">
//                 <label htmlFor="username">User Name</label>
//                 <input type="text" id="username" placeholder="Enter First Name" />

//             </div>
//             <div className="input-group-reserve">
//                 <label htmlFor="phhoneno">Phone Number</label>
//                 <input type="text" id="phoneno" placeholder="Enter Phone Number" />

//             </div>
//             </div>
//             <div className="personal-info">
//             <div className="input-group-reserve">
//                 <label htmlFor="email">Email Address</label>
//                 <input type="text" id="email" placeholder="Enter Email Address" />

//             </div>
//             <div className="input-group-reserve">
//                 <label htmlFor="location">Location</label>
//                 <input type="text" id="location" placeholder="Enter Location" />

//             </div>
//             </div>
//             <p className="resrvation-form-text">Bike Details</p>
//             <div className="bike-details">
//             <div className="input-group-reserve">
//                 <label htmlFor="bikebrand">Bike Brand</label>
//                 <input type="text" id="bikebrand" placeholder="Enter Bike Brand" />

//             </div>
//             <div className="input-group-reserve">
//                 <label htmlFor="bikemodel">Bike Model</label>
//                 <input type="text" id="bikemodel" placeholder="Enter Bike Model" />

//             </div>
//             </div>
//             <div className="bike-details">
//             <div className="input-group-reserve">
//                 <label htmlFor="bikeyear">Bike Year</label>
//                 <input type="text" id="bikeyear" placeholder="Enter Bike Year" />

//             </div>
//             <div className="input-group-reserve">
//                 <label htmlFor="serialno">Serial Number</label>
//                 <input type="text" id="serialno" placeholder="Enter Serial Number" />

//             </div>
//             </div>
//             <p className="resrvation-form-text">Shop Availability</p>
//             <div className="bike-details">
//             <div className="input-group-reserve">
//                 <label htmlFor="availabledate">Availability Dates</label>
//                 <div className="input-with-image">
//                 <input type="text" id="availabledate" placeholder="Enter Bike Year" />
//                     <img src={date} className="date" alt="Date"/>
//                     </div>
             
                
                

//             </div>
//             <div className="input-group-reserve">
//                 <label htmlFor="availabletime">Availability Time</label>
//                 <div className="input-with-image">
//                 <input type="text" id="availabletime" placeholder="Enter Bike Year" />
//                     <img src={time} className="date" alt="Time"/>
//                     </div>
             
                
                

//             </div>
//             </div>
//             <p className="resrvation-form-text">Service Details</p>
//             <div className="bike-details">
//             <div className="input-group-reserve">
//     <label htmlFor="availabletime">Preferred Date</label>
//     <div className="input-with-image">
//         <select id="availabletime">
//             <option value="morning">Morning</option>
//             <option value="afternoon">Afternoon</option>
//             <option value="evening">Evening</option>
//         </select>
//         <img src={time} className="date" alt="Preferred Date"/>
//     </div>
// </div>
//            <div className="input-group-reserve">
//     <label htmlFor="servicetype">Service Type</label>
//     <div className="input-with-image">
//         <select id="availabletime">
//             <option value="service1">Service1</option>
//             <option value="service2">Service2</option>
//             <option value="service3">Service3</option>
//         </select>
      
//     </div>
// </div>
//             </div>
//             <div className="bike-details">
//             <div className="input-group-reserve">
//     <label htmlFor="servicetype">Preferred Time</label>
//     <div className="input-with-image">
//         <select id="availabletime">
//             <option value="morning">Morning</option>
//             <option value="afternoon">Afternoon</option>
//             <option value="evening">Evening</option>
//         </select>
      
//     </div>
// </div>
//    <div className="input-group-reserve">
//     <label htmlFor="payment">Payment Method</label>
//     <div className="input-with-image">
//         <select id="availabletime">
//             <option value="morning">Online</option>
//             <option value="afternoon">Cash</option>
           
//         </select>
      
//     </div>
// </div>
//             <div className="input-group-reserve">
//                 <label htmlFor="availabletime">Additional Comment</label>
//                 <div className="comment-container-reserve">
//                 <textarea className="comment-box-reserve" placeholder="Enter Additional comments here"></textarea>
                    
//                     </div>
             
                
                

//             </div>

//             </div>
//             <div className="checkbox-container">
//                         <input type="checkbox" id="robotCheckbox" />
//                         <label htmlFor="robotCheckbox">I am not a robot</label>
//                         <img src={verification} alt="Robot" className="robot-image" />
                        
//                     </div>
//                     <button type="submit" className="submit-button-reserve">Submit</button>
//             </div>
//         </div>

//     );

// }
// export default Reservation;