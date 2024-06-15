// import React from "react";
// import './Register2.css';
// import { Link ,useNavigate} from "react-router-dom";
// import sideImage from "../assets/sideimage.png";


// function Register2() {
//     const navigate = useNavigate();

//     const handleNextButtonClick = () => {
//         navigate("/register3");
//     }
//     const handleBackButtonClick = () => {
//         navigate("/register");
      
//     };
//     return (
//         <div className="register2-container">
//             <div className="form-register2-container">
//                 <p className="register-text">REGISTER NOW</p>
//                 <form>
//                     <div className="registration-steps">
//                         <div className="step">1</div>
//                         <div className="step active">2</div>
//                         <div className="step">3</div>
//                     </div>
//                     <div className="verify">
//                         <div className="verify-phoneno">Verify your phone number
//                             <p>We sent you a 6 digit code to your mobile.<br></br>
//                                 Enter the code below to confirm your phone number. </p>
//                             <div className="verification-code">
//                                 <input type="text" maxLength="1" />
//                                 <input type="text" maxLength="1" />
//                                 <input type="text" maxLength="1" />
//                                 <input type="text" maxLength="1" />
//                                 <input type="text" maxLength="1" />
//                                 <input type="text" maxLength="1" />
//                             </div>
//                             <p className="resend-code">Didn't receive a code? <Link to="#">Resend</Link>.</p>

//                         </div>
//                         <div className="verify-email">Veify your email address
//                             <p>We sent you a 6 digit code to your email.<br></br>
//                                 Enter the code below to confirm your email address. </p>
//                             <div className="verification-code">
//                                 <input type="text" maxLength="1" />
//                                 <input type="text" maxLength="1" />
//                                 <input type="text" maxLength="1" />
//                                 <input type="text" maxLength="1" />
//                                 <input type="text" maxLength="1" />
//                                 <input type="text" maxLength="1" />
//                             </div>
//                             <p className="resend-code">Didn't receive a code? <Link to="#">Resend</Link>.</p>

//                         </div>
//                     </div>

//                 </form>
//                 <div className="button-container">
//                 <button type="button" className="register2-button-form" onClick={handleBackButtonClick }>Back</button>
//                     <button type="button" className="register2-button-form" onClick={handleNextButtonClick}>Next</button>
//                 </div>
//                 <div className="seperator">
//                     <span>Or</span>
//                 </div>
//                 <div className="login-link">
//                     Already Have an Account? <Link to="/login">Click here</Link>.
//                 </div>
//             </div>
//             <div className="image-container">
//                 <img src={sideImage} alt="Login" />
//             </div>
//         </div>
//     );
// }

// export default Register2;
