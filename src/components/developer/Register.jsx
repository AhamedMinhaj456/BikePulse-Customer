// import React from "react";
// import './Register.css';
// import sideImage from "../assets/sideimage.png"
// import { Link,useNavigate } from "react-router-dom";



// function Register(){
//     const navigate = useNavigate();

//     const handleNextButtonClick = () => {
//         navigate("/register2");
//     };
//     return(
//         <div className="register-container">
//             <div className="form-register-container">
//                 <p className="register-text">REGISTER NOW</p>
//                 <form>
//                 <div className="registration-steps">
//                 <div className="step active">1</div>
//                 <div className="step">2</div>
//                 <div className="step">3</div>
//             </div>
           

//                     <div className="input-group">
//                         <label htmlFor="username">Name</label>
//                         <input type="text" id="username" placeholder="Enter UserName" />

//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="email">Email Address</label>
//                         <input type="text" id="email" placeholder="Enter Email Address" />

//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="phoneno">Phone Number</label>
//                         <input type="text" id="phoneno" placeholder="Enter Phone Number" />

//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="location">Location</label>
//                         <input type="text" id="location" placeholder="Enter Location" />

//                     </div>
                  
           
//                     <button type="button" className="register-button-form" onClick={handleNextButtonClick}>Next</button>
//                 </form>
//                 <div className="seperator">
//                     <span>Or</span>
//                 </div>
//                 <div className="register-link">
//                 Already Have an Account? <Link to="/login">Click here</Link>.
//                 </div>

//             </div>
//             <div className="image-container">
//                 <img src={sideImage} alt="Login" />
//             </div>
//         </div>
//     );

// }
// export default Register;