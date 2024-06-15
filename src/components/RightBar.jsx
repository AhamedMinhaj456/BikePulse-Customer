import React from "react";
import './RightBar.css';
import { Link } from "react-router-dom";
import userIcon from "../assets/maleuser.png";
import notificationIcon from "../assets/notifications.png";
import chatIcon from "../assets/chat2.png";
import settingIcon from "../assets/settings.png";
import reserveIcon from "../assets/reserve2.png";
import cartIcon from "../assets/shoppingcart.png";
import hintIcon from "../assets/hint.png"; 
import logoutIcon from "../assets/logout.png";

const Rightbar = () => {
    return (
      <div className="right-sidebar">
        <Link to="/profile" className="icon-link">
          <img className="icon" src={userIcon} alt="User" />
        </Link>
        <Link to="/notification" className="icon-link">
        <img className="icon" src={notificationIcon} alt="Notification" />
        </Link>
  
        <Link to="/chat-setting" className="icon-link">
          <img className="icon" src={chatIcon} alt="Chat" />
        </Link>
        <Link to="/account-setting" className="icon-link">
          <img className="icon" src={settingIcon} alt="Setting" />
        </Link>
        <Link to="/reserve" className="icon-link">
          <img className="icon" src={reserveIcon} alt="Reserve" />
        </Link>
        <Link to="/cart" className="icon-link">
          <img className="icon" src={cartIcon} alt="Cart" />
        </Link>
        <Link to="/hint" className="icon-link">
          <img className="icon" src={hintIcon} alt="Hint" />
        </Link>
        <Link to="/" className="icon-link">
          <img className="icon" src={logoutIcon} alt="  Logout" />
        </Link>
      </div>
    );
  };
  
  export default Rightbar;