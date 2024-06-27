import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './Signup.css'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addCustomerId , addCustomerStatus } from '../Slices/CustomerSlice.js';

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [customerId, setCustomerId] = useState('');
    const [customerName, setCustomerName] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
    const [customerUsername, setCustomerUsername] = useState("");
    const [customerPassword, setCustomerPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false); // Loading state added

    const validatePhoneNumber = (phoneNumber) => {
        const phonePattern = /^07[0-9]{8}$/;
        return phonePattern.test(phoneNumber);
    };

    const saveCustomer = async (event) => {
        event.preventDefault();

        // Check if passwords match
        if (customerPassword !== confirmPassword) {
            alert("Passwords do not match. Please re-enter.");
            return;
        }

        // Check phone number length
        if (customerPhoneNumber.length !== 10) {
            alert("Phone number should be exactly 10 digits.");
            return;
        }

        // Set loading state to true before making the API call
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:8095/customer/save", {
                customerName,
                customerEmail,
                customerPhoneNumber,
                customerUsername,
                customerPassword,
            });

            if (response.data.status === true) {
                //alert(response.data.customerId);
                
                const loggedInCustomerId = response.data.customerId;
                const loggedInCustomerStatus = response.data.status;
                dispatch(addCustomerId(loggedInCustomerId));
                dispatch(addCustomerStatus(loggedInCustomerStatus));
                setCustomerId("");
                //Login(loggedInCustomerId);
                navigate('/Shops');
             
                 }
                 else if(response.data.status === false){
                   alert(response.data.message);
                }

            alert("Registration Successful");
            navigate('/Shops');
        } catch (err) {
            alert(err);
        } finally {
            // Set loading state back to false after API call completes
            setLoading(false);
        }
    }

    const handleLoginButtonClick = () => {
        navigate("/login");
    };

    return (
        <div className="signup-container">
            <div className="signup-wrapper">
                <form onSubmit={saveCustomer}>
                    <h1>Signup</h1>
                    <div className="signup-input-box">
                        <input type="text" placeholder='Name' required
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                        />
                        <FaUser className="signup-icon" />
                    </div>
                    <div className="signup-input-box">
                        <input type="email" placeholder='Email' required
                            value={customerEmail}
                            onChange={(e) => setCustomerEmail(e.target.value)}
                        />
                        <FaEnvelope className="signup-icon" />
                    </div>
                    <div className="signup-input-box">
                        <input type="tel" placeholder='Phone Number' required
                            value={customerPhoneNumber}
                            onChange={(e) => setCustomerPhoneNumber(e.target.value)}
                        />
                        <FaPhone className="signup-icon" />
                    </div>
                    <div className="signup-input-box">
                        <input type="text" placeholder='Username' required
                            value={customerUsername}
                            onChange={(e) => setCustomerUsername(e.target.value)}
                        />
                        <FaUser className="signup-icon" />
                    </div>
                    <div className="signup-input-box">
                        <input type="password" placeholder='Password' required
                            value={customerPassword}
                            onChange={(e) => setCustomerPassword(e.target.value)}
                        />
                        <FaLock className="signup-icon" />
                    </div>
                    <div className="signup-input-box">
                        <input type="password" placeholder='Confirm Password' required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <FaLock className="signup-icon" />
                    </div>

                    {/* Conditional rendering for loading spinner */}
                    {loading ? (
                        <div className="loading-spinner">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        <button type="submit" className="signup-button">Signup</button>
                    )}

                    <div className="register-link">
                        <p>Already Have an Account? <a href="#" onClick={handleLoginButtonClick}>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
