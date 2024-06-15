import React, { useState } from 'react';
import facebook from "../assets/facebook.png";
import google from "../assets/Google.png";
import { FaUser ,FaLock,FaEnvelope, FaPhone} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './Signup.css'
import axios from "axios";





function Signup() {
    const navigate = useNavigate();

    const [customerName, setCustomerName] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
    const [customerUsername, setCustomerUsername] = useState("");
    const [customerPassword, setCustomerPassword] = useState("");

    const validatePhoneNumber = (phoneNumber) => {
      
        const phonePattern = /^07[0-9]{8}$/;
        return phonePattern.test(phoneNumber);
    };

    async function saveCustomer(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8095/customer/save", {
            customerName,
            customerEmail,
            customerPhoneNumber,
            customerUsername,
            customerPassword,
            
          });
          alert("Registration Successful");
          navigate('/Shops'); 
        } catch (err) {
          alert(err);
        }
      }

    const handleLoginButtonClick = () => {
        navigate("/login");
    };
    	
  
    
    return (
        <div className="signup-container">
        <div className="signup-wrapper">
            <form  onSubmit={saveCustomer}>
                <h1>Signup</h1>
                <div className="signup-input-box">
                    <input type="text" placeholder='Name' required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    />
                    <FaUser className="signup-icon"/>
                </div>
                <div className="signup-input-box">
                    <input type="email" placeholder='Email' required
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    />
                    <FaEnvelope className="signup-icon"/>
                </div>
                <div className="signup-input-box">
                    <input type="tel" placeholder='Phone Number' required
                    
                    value={customerPhoneNumber}
                    onChange={(e) => setCustomerPhoneNumber(e.target.value)}
                    // {(e) =>{
                    //     const inputValue = e.target.value;
                    //     if(validatePhoneNumber(inputValue)){
                    //         setCustomerPhoneNumber(inputValue)
                    //     }
                    // }}
                    />
                    <FaPhone className="signup-icon"/>
                </div>
                <div className="signup-input-box">
                    <input type="text" placeholder='Username' required
                    value={customerUsername}
                    onChange={(e) => setCustomerUsername(e.target.value)}
                    />
                    <FaUser className="signup-icon"/>
                </div>
                <div className="signup-input-box">
                    <input type="password" placeholder='Password' required
                    value={customerPassword}
                    onChange={(e) => setCustomerPassword(e.target.value)}
                    />
                    <FaLock className="signup-icon"/>
                </div>
              
                <button type="submit" className="signup-button">Signup</button>
               <div className="register-link">
               <p>Already Have an Account? <a href="#" onClick={handleLoginButtonClick}>Login</a></p>

               </div>


             
            </form>
        </div>
        </div>
    );
}

export default Signup;
