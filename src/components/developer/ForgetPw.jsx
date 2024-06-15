// import React from "react";
// import './ForgetPw.css';
// import sideImage from "../assets/sideimage.png"
// import { useNavigate } from "react-router-dom";

// function ForgetPw() {
//     const navigate = useNavigate();

//     const handleForgetContinueButtonClick = () => {
//         navigate("/shops");

        
//     };

//     const handleForgetBackButtonClick = () => {
//         navigate("/login");

        
//     };
//     return (
//         <div className="register-container">
//             <div className="form-register-container">
//                 <p className="register-text">Forget Password</p>
//                 <span className="forget-text">Enter your email address below and we’ll send<br></br> you a link to reset your password</span>
//                 <form>

//                     <div className="input-group">
//                         <label htmlFor="phoneEmail">Phone Number or Email</label>
//                         <input type="text" id="phoneEmail" placeholder="Enter your Phone Number or Email" />

//                     </div>
//                     <button type="button" className="forget-button-form" onClick={handleForgetContinueButtonClick}>Continue</button>
//                     <button type="button" className="forget-button-form" onClick={handleForgetBackButtonClick}>Go Back</button>
//                 </form>
//             </div>

//             <div className="image-container">
//                 <img src={sideImage} alt="Login" />
//             </div>
//         </div>
//     );

// }

// export default ForgetPw;