import React from "react";
import './ForgotPw.css';
import { FaUser ,FaLock,FaEnvelope} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ForgotPw(){
    const navigate = useNavigate();
    const handleSignupButtonClick = () => {
        navigate("/signup");
    };
    return(
        <div className="signup-container">
        <div className="signup-wrapper">
            <form action="">
                <h1>Forgot Password?</h1>
                <h4>Enter you Email and you'll receive instructions on how to reset your password</h4>
               
                <div className="signup-input-box">
                    <input type="email" placeholder='Email' required/>
                    <FaEnvelope className="signup-icon"/>
                </div>
               
                <button type="submit" className="signup-button">Submit</button>
               <div className="register-link">
               <p>Don't Have an Account? <a href="#" onClick={handleSignupButtonClick} >Signup</a></p>

               </div>
               
              
            


             
            </form>
        </div>
        </div>
    );
}

export default ForgotPw;