import React, { useState }  from "react";

import './Settings.css';
import Rightbar from "./RightBar";
import settingIcon from "../assets/settings.png";


function Settings(){
     
      const [isAuthenticationEnabled, setIsAuthenticationEnabled] = useState(false);

     
      const toggleAuthentication = () => {
          setIsAuthenticationEnabled(!isAuthenticationEnabled);
      };

    return(
        <div className="settings-container">
            <Rightbar/>
            <img src={settingIcon} className="icon-user" alt="Setting"/>
            <p className="resrvation-form-text">Change Password</p>
            <div className="personal-info">
            <div className="input-group-reserve">
                <label htmlFor="password">Current Password</label>
                <input type="password" id="password" placeholder="Enter Current Password" />

            </div>
            <div className="input-group-reserve">
                <label htmlFor="password">New Password</label>
                <input type="password" id="password" placeholder="Enter New Password" />

            </div>
            </div>
            <div className="personal-info">
            <div className="input-group-reserve">
                <label htmlFor="password">Confirm New Password</label>
                <input type="password" id="password" placeholder="Enter Current Password" />

            </div>
        
            </div>
            <button type="submit" className="save-button-settings">Save</button>
            <p className="resrvation-form-text">Account Recovery</p>
            <div className="personal-info">
            <div className="input-group-reserve">
                <label htmlFor="email">Recovery Email Address</label>
                <input type="text" id="email" placeholder="Enter Current Password" />

            </div>
            <div className="input-group-reserve">
                <label htmlFor="phoneno">Recovery Phone No</label>
                <input type="text" id="phoneno" placeholder="Enter " />
            

            </div>
           
            </div>
            <button type="submit" className="save-button-settings">Save</button>
           
            <p className="resrvation-form-text">Account Deactivation</p>
            <div className="account-deactivation">
            <button type="submit" className="save-button-settings">Delete Account</button>
            <button type="submit" className="save-button-settings">Deactivate Account</button>
            </div>
            <p className="resrvation-form-text">Two Factor Authentication</p>
            <div className="authentication">
             <p className="enable-text">Enable/Disable</p> 
                <label className="switch">
                    <input type="checkbox" checked={isAuthenticationEnabled} onChange={toggleAuthentication} />
                    <span className="slider"></span>
                </label>
            </div>


            


        </div>
    );
}

export default Settings;