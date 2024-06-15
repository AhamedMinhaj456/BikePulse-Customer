import React from "react";
import './ShopsNavbar.css';
import { Link } from "react-router-dom";
import logoImage from '../../src/assets/bike2.png';



function ShopsNavbar(){
    return(
        <div className="navbar-container">
        <div className="navbar-logo">
            <img src={logoImage} alt="Logo" />
            <div className="brand-text brand-text-gradient">BikePulse</div>
        </div>
        <div className="navbar-links">
           
            <Link to="/faultsuggest" className="fault-button" style={{ textDecoration: 'none' }} >Fault Suggesstion</Link>
           
        </div>
        
    </div>
    );

}

export default ShopsNavbar;