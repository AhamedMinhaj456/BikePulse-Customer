import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import './Navbar.css'; // Custom CSS for Navbar styles
import logoImage from '../../src/assets/bike2.png';
import { ReactComponent as ProfileIcon } from '../assets/profile.svg';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { clearCustomerId,clearCustomerStatus } from "../Slices/CustomerSlice";


function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const customerStatus = useSelector((state) => state.customerStatus);
    const customerId = useSelector((state) => state.customers);
    const [customer, setCustomer] = useState(null);

    const handleUserIconClick = () => {
        navigate("/dash");
    };

    const handleLogout = () => {
        
        dispatch(clearCustomerId());
        dispatch(clearCustomerStatus());
        navigate("/");
        window.location.reload()
    };

    const fetchCustomerData = async () => {
        try {
            if (customerId) {
                console.log(`Fetching data for customerId: ${customerId}`);
                const response = await axios.get(`http://localhost:8095/customer/${customerId}`);
                console.log('API response:', response.data);
                setCustomer(response.data);
            }
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    };

    useEffect(() => {
        fetchCustomerData();
    }, [customerId]);

    return (
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                <img src={logoImage} alt="Logo" />
                <div className="brand-text">BikePulse</div>
            </Link>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/aboutus" className="nav-link">About us</Link>
                <Link to="/shops" className="nav-link">Shops</Link>
                {customerStatus ? (
                    <div className="nav-link-container">
                        {customer ? (
                            <>
                                <div onClick={handleUserIconClick} className="profile-container">
                                    <ProfileIcon className="profile" />
                                    <span className="customer-name">{customer.customerName}</span>
                                </div>
                                <button className="sign-out-button" onClick={handleLogout}>Sign Out</button>
                            </>
                        ) : (
                            <span className="nav-link">Loading...</span>
                        )}
                    </div>
                ) : (
                    <Link to="/login" className="login-button" style={{ textDecoration: 'none' }}>LOGIN</Link>
                )}
            </div>
        </div>
    );
}

export default Navbar;
