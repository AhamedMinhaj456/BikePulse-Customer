import React from "react";
import './FaultSuggestNavbar.css';
import { Link } from "react-router-dom";
import logoImage from '../../src/assets/bike2.png';

function FaultSuggestNavbar(){
return(
    <div className="navbar-container">
    <div className="navbar-logo">
        <img src={logoImage} alt="Logo" />
        <div className="brand-text brand-text-gradient">BikePulse</div>
    </div>
    <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
    </div>
    
</div>
);
}

export default FaultSuggestNavbar;