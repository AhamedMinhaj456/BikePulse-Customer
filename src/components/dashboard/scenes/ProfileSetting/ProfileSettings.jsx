import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProfileSettings.css";
import { useSelector } from "react-redux";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function ProfileSettings() {
  const customerId = useSelector((state) => state.customers);

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
  const [customerUsername, setCustomerUsername] = useState("");
  const [oldPasswordInput, setOldPasswordInput] = useState("");
  const [newCustomerPassword, setNewCustomerPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [oldPasswordCorrect, setOldPasswordCorrect] = useState(true);
  const [customerPassword, setCustomerPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8095/customer/${customerId}`
      );
      const data = response.data;
      setCustomerName(data.customerName);
      setCustomerEmail(data.customerEmail);
      setCustomerPhoneNumber(data.customerPhoneNumber);
      setCustomerUsername(data.customerUsername);
      //setCustomerPassword(data.customerPassword.trim()); // Trim any leading or trailing spaces
      setCustomerPassword(data.customerPassword);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [customerId]);

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSaveClick = async () => {
    try {
      if (oldPasswordInput.trim() !== "") {
        if (oldPasswordInput !== customerPassword) {
          setOldPasswordCorrect(false);
          return;
        }
        setOldPasswordCorrect(true);
      }
  
      if (newCustomerPassword !== confirmPassword) {
        setPasswordMatch(false);
        return;
      }
      setPasswordMatch(true);
      setIsEditable(false);
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Add this header
        },
      };
  
      const response = await axios.post(
        `http://localhost:8095/customer/update/${customerId}`,
        {
          customerName,
          customerEmail,
          customerPhoneNumber,
          customerUsername,
          newCustomerPassword
        },
        config // Pass the config object as the third argument
      );
  
      // Handle successful response
      console.log("Customer details updated successfully:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error updating customer:", error);
      // You can set state to display an error message to the user, for example:
      // setErrorMessage('An error occurred while updating customer details. Please try again.');
    }
  };
  

  return (
    <div className="profile-settings-container">
      <div className="profile-picture-settings">
        <img src="" alt="Profile" />
        <button>Upload</button>
      </div>
      <div className="personal-details-settings">
        <label>Full Name</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          disabled={!isEditable}
        />
        <label>Email</label>
        <input
          type="email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
          disabled={!isEditable}
        />
        <label>Phone Number</label>
        <input
          type="text"
          value={customerPhoneNumber}
          onChange={(e) => setCustomerPhoneNumber(e.target.value)}
          disabled={!isEditable}
        />
        <label>Username</label>
        <input
          type="text"
          value={customerUsername}
          onChange={(e) => setCustomerUsername(e.target.value)}
          disabled={!isEditable}
        />
        <button onClick={handleEditClick}>Edit</button>
      </div>
      <div className="security-settings">
        <label>Old Password</label>
        <div className="password-input">
          <input
            type={showOldPassword ? "text" : "password"}
            value={oldPasswordInput}
            onChange={(e) => setOldPasswordInput(e.target.value)}
            disabled={!isEditable}
          />
          {showOldPassword ? (
            <VisibilityOff
              onClick={() => setShowOldPassword(!showOldPassword)}
            />
          ) : (
            <Visibility onClick={() => setShowOldPassword(!showOldPassword)} />
          )}
        </div>
        {!oldPasswordCorrect && (
          <p style={{ color: "red" }}>Your old password is wrong</p>
        )}
        <label>New Password</label>
        <div className="password-input">
          <input
            type={showNewPassword ? "text" : "password"}
            value={newCustomerPassword}
            onChange={(e) => setNewCustomerPassword(e.target.value)}
            disabled={!isEditable}
          />
          {showNewPassword ? (
            <VisibilityOff
              onClick={() => setShowNewPassword(!showNewPassword)}
            />
          ) : (
            <Visibility onClick={() => setShowNewPassword(!showNewPassword)} />
          )}
        </div>
        <label>Confirm New Password</label>
        <div className="password-input">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={!isEditable}
          />
          {showConfirmPassword ? (
            <VisibilityOff
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          ) : (
            <Visibility
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          )}
        </div>
        {!passwordMatch && (
          <p style={{ color: "red" }}>Passwords do not match</p>
        )}
        <button onClick={handleSaveClick}>Change Password</button>
        <button>Delete Account</button>
      </div>
      <button className="profile-settings-save" onClick={handleSaveClick}>
        Save
      </button>
    </div>
  );
}

export default ProfileSettings;
