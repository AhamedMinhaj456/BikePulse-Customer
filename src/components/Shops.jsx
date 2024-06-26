import React,{useState,useEffect} from "react";
import './RightBar';
import './shops.css';
import { FaClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import shopImg from "../assets/shops_img.png"
import velocare from "../assets/velocare.png"
import location from "../assets/location.png";
import star2 from "../assets/star2.png";
import tickmark from "../assets/tickmark.png";
import { useNavigate } from "react-router-dom";
import Rightbar from "./RightBar";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addShopId } from '../Slices/ShopSlice.js';


function Shops() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [shops, setShops] = useState([
        { shopId: 1, shopName: 'Shop 1', shopAddress: 'Location 1',contactNumber:'+94 11 455 4665', openingHours: 'Opens daily 8.00 AM - 6.00 PM',services: ['Company Services only', 'Repair & Maintenance'],},
        { shopId: 2, shopName: 'Shop 2', shopAddress: 'Location 2',contactNumber: '+94 11 455 6650', openingHours: 'Opens daily 8.00 AM - 6.00 PM', services: ['Full services', 'Repair & Maintenance'], },
        { shopId: 3, shopName: 'Shop 3', shopAddress: 'Location 3',contactNumber: '+94 26 555 4623', openingHours: 'Opens daily 8.00 AM - 6.00 PM', services: ['Full services', 'Company Services', 'Repair & Maintenance'], },
        { shopId: 4,shopName: 'Shop 4', shopAddress: 'Location 4',contactNumber: '+94 77 123 4567', openingHours: 'Opens daily 9.00 AM - 7.00 PM', services: ['Full services', 'Repair & Maintenance'],},
        { shopId: 5, shopName: 'Shop 5', shopAddress: 'Location 5', contactNumber: '+94 71 987 6543', openingHours: 'Opens daily 9.00 AM - 7.00 PM', services: ['Company Services only'],}
      ]);
      
      useEffect(() => {
        fetchData();
      }, []);
      
      
      const fetchData = async () => {
        try {
          // Example using axios:
          const response = await axios.get('http://localhost:8095/shop/getShop');
          setShops(response.data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };

      const handleReserveClick = (shopId) => {
        dispatch(addShopId(shopId));
        //navigate(`/shop/${shopId}`);
        navigate('/shop-home');
        //alert(shopId)
      };
    
    
    useEffect(() => {
        // Your logic to check if user is logged in (e.g., checking session, local storage, etc.)
        const userIsLoggedIn = checkIfUserIsLoggedIn(); // Implement this function
    
        // Update state based on whether user is logged in
        setIsLoggedIn(userIsLoggedIn);
      }, []);
    
      // Function to check if user is logged in (replace this with your actual authentication logic)
      const checkIfUserIsLoggedIn = () => {
        // Your authentication logic here (e.g., checking session, local storage, etc.)
        // Return true if user is logged in, false otherwise
        // Example:
        return localStorage.getItem("token") ? true : false;
      };

      // search 
        const [searchTerm, setSearchTerm] = useState('');
        
    
        const handleSearch = async (e) => {
            e.preventDefault();
            const response = await axios.get('http://localhost:8095/shop/search', {
                params: { q: searchTerm }
            });
            setShops(response.data);
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

    return (
        <div className="shops-container">
       
       
       {isLoggedIn && <Rightbar />}
            {/* <div className="image-section">
                <img src={shopImg} className="full-width-image" />

            </div> */}

            <div className="search-container-new">
  <div className="search-content-new">
    <h1>
      "Discover a diverse array of registered bike shops, each offering unique expertise and services. Choose the one that suits your preferences and needs, putting you in control of your bike service experience."
    </h1>
    <div className="search-bar-new">
      <form onSubmit={handleSearch} className="search-form-new">
        <input
          className="search-input-new"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by Shop Name, Address, or Email"
        />
        <button className="search-button-new" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  </div>
  <footer className="footer-new">
    <span>Dive into the Content License details to learn more</span>
    <span>Explore freely with images courtesy of Mylene2401</span>
  </footer>
</div>

            
            <div className="main-cards-container">
                <div className="main-cards">
                    <h2>Professional Services</h2>
                    <p>Explore a range of professional bike services from certified technicians. Our skilled professionals are equipped to handle everything from routine maintenance to complex repairs, ensuring your bike is in top-notch condition.</p>
                </div>
                <div className="main-cards">
                    <h2>Quality Parts</h2>
                    <p>Discover genuine and high-quality bike parts at our shops. We offer a diverse selection of parts from trusted manufacturers, ensuring durability and performance. Upgrade your ride with top-tier components available at competitive prices.</p>

                </div>
                <div className="main-cards">
                    <h2>Emergency Assistance</h2>
                    <p>For urgent matters, our emergency assistance feature is at your service. Access real-time chat support for immediate help with any bike-related concerns. Our dedicated team is available 24/7 to provide quick and reliable assistance.</p>
                </div>
            </div>
            <div className="line"></div>
            {/* <div className="search-box">
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Search by Shop Name, Address, or Email" 
                />
                <button type="submit">Search</button>
            </form>
            </div> */}
            
            <div className="see-all-container">
                
            <div className="cards-container-grid">
             {shops.map((shop) => (
                    <div key={shop.shopId} className="card">
                    <div className="img-box">

                        <img src={require('../assets/bike9.jpg')} alt="Card1" />
                    </div>
                    <h1 className="card-heading">{shop.shopName}</h1>
                    <p>
                        <i className="fa fa-location-arrow" aria-hidden="true" /> {shop.shopAddress}
                    </p>
                    <p>
                        <i className="fa fa-phone" aria-hidden="true" /> {shop.contactNumber}
                    </p>
                    <p>
                        <img src={require('../assets/location.png')} alt="Location Image" />
                        <a href="#" className="direction-link">
                        Get Direction
                        </a>
                    </p>
                    <div className="details-content">
                    <p>
                <FaClock /> {shop.openingTime} - {shop.closingTime}
              </p>
              {shop.status === "Opened" && <p>Open</p>}
              {shop.status === "Closing Soon" && <p>Closing Soon</p>}
              {shop.status === "Closed" && (
                <p>Shop Closed Now Next Open: {shop.nextOpenTime}</p>
              )}
                        <div className="details-button">
                        
                            <button className="button-view" onClick={() => handleReserveClick(shop.shopId)}
                            >Reserve Now</button>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
                
                <div className="show-more-button-container">
                    <button className="show-more-button">Show More</button>
                </div>
                <div className="shop-bottom-text">
                    Discover the best bike service shops near you! Explore a curated list of trusted and reliable service providers on the BikePulse<br></br> platform. From quick repairs to top-notch maintenance, our featured shops are here to keep your ride in peak condition. <br></br>Scroll through and find the perfect match for your biking needs!
                </div>

            </div>
        </div>
    );
}

export default Shops;