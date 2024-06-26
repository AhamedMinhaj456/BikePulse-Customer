import React, { useState, useEffect } from "react";
import { FaClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "./ShopDetails.css";
import axios from "axios";
import img1 from '../../../assets/bike8.jpg';

import { useSelector } from 'react-redux';


const ShopDetails = () => {
  const shopId = useSelector((state) => state.shops);

  const [shops, setShops] = useState([
    {
      shopId: 1,
      shopName: "Velo Care",
      shopAddress: "123 Main St, City, Country",
      contactNumber: "+1234567890",
      profileImage: img1,
      openingTime: "08:00",
      closingTime: "14:20",
      shopDescription: "Discover the wonderland of our shop, where every biking enthusiast finds their dreams fulfilled. From top-of-the-line gear to expert repairs and friendly service, we're your one-stop destination for all things biking. Step into our world and experience the joy of cycling like never before!"
,
      shopMission: "To provide the best service and products.",
      latitude: 6.927079,
      longitude: 79.861244
    }
  ]);

  
    useEffect(() => {
      if (shopId) {
          fetchShopDetails();
      }
  }, [shopId]);

 const fetchShopDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8095/shop/${shopId}`);
      if (Array.isArray(response.data)) {
        setShops(response.data);
      } else {
        setShops([response.data]);
      }
      console.log("API response:", response.data);
    } catch (error) {
      console.error("Error fetching shop details:", error);
    }
  };

  // for shop open close status

  useEffect(() => {
    const interval = setInterval(() => {
      // Update shop status every minute
      setShops((prevShops) =>
        prevShops.map((shop) => {
          return {
            ...shop,
            status: getShopStatus(shop.openingTime, shop.closingTime),
            nextOpenTime: getNextOpenTime(shop.openingTime)
          };
        })
      );
    }, 60); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const getCurrentTime = () => {
    const currentTime = new Date();
    return (
      currentTime.getHours() +
      ":" +
      (currentTime.getMinutes() < 10 ? "0" : "") +
      currentTime.getMinutes()
    );
  };

  const getShopStatus = (openingTime, closingTime) => {
    const currentTime = getCurrentTime();
    if (currentTime >= openingTime && currentTime <= closingTime) {
      return "Opened";
    } else if (isOpeningSoon(closingTime)) {
      return "Closing Soon";
    } else if (currentTime < openingTime) {
      return "Closed";
    } else {
      return "Closed"; // Shop is closed, next opening time is already handled
    }
  };

  const isOpeningSoon = (closingTime) => {
    const currentTime = new Date();
    const closingHour = parseInt(closingTime.split(":")[0], 10);
    const closingMinute = parseInt(closingTime.split(":")[1], 10);
    const closingTimeObj = new Date();
    closingTimeObj.setHours(closingHour, closingMinute, 0, 0);
    const timeDifference = closingTimeObj - currentTime;
    return timeDifference > 0 && timeDifference <= 60 * 60 * 1000; // Check if closing time is within 60 minutes
  };

  const getNextOpenTime = (openingTime) => {
    const nextOpenTime = new Date();
    const currentHour = nextOpenTime.getHours();
    const openingHour = parseInt(openingTime.split(":")[0], 10);
    if (currentHour < openingHour) {
      nextOpenTime.setHours(openingHour);
      nextOpenTime.setMinutes(0);
      nextOpenTime.setSeconds(0);
      return nextOpenTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
    } else {
      nextOpenTime.setDate(nextOpenTime.getDate() + 1);
      nextOpenTime.setHours(openingHour);
      nextOpenTime.setMinutes(0);
      nextOpenTime.setSeconds(0);
      return nextOpenTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
    }
  };

  // map 
  

  return (
    <div>
      
      {shops.map((shop, index) => (
        <div key={index} className="shop-location-container">
          <div className="shop-info">
            {/* <div className="shop-heading">
              <h2><FaMapMarkerAlt /> Shop Location</h2>
            </div> */}
            <div className="shop-details">
              <div className="profile-image-container">
                <img
                  src={`data:image/jpeg;base64,${shop.profileImage}`}
                  alt={`image_${shop.shopId}`}
                  className="profile-image"
                />
                 
              </div>
              <p>
                <strong>{shop.shopName}</strong>
              </p>
              <p>
                <FaMapMarkerAlt /> {shop.shopAddress}
              </p>
              <p>
                <FaPhone /> {shop.contactNumber}
              </p>
              <p>
                <FaClock /> {shop.openingTime} - {shop.closingTime}
              </p>
              {shop.status === "Opened" && <p>Open</p>}
              {shop.status === "Closing Soon" && <p>Closing Soon</p>}
              {shop.status === "Closed" && (
                <p>Shop Closed Now Next Open: {shop.nextOpenTime}</p>
              )}

              <p>{shop.shopDescription}</p>
              
            </div>
          </div>
          <div className="google-map">
            <iframe
              title="shop-location"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={`https://maps.google.com/maps?q=${shop.latitude},${shop.longitude}&markers=${shop.latitude},${shop.longitude}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopDetails;
