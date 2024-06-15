import React, { useState, useEffect } from "react";
import axios from "axios";
import './ShopMission.css';
import Container from 'react-bootstrap/Container';

function ShopMission(props) {
  const [shops, setShops] = useState([
    {
      shopId: 1,
      shopName: "Velo Care",
      shopAddress: "123 Main St, City, Country",
      contactNumber: "+1234567890",
      profileImage: "",
      openingTime: "08:00",
      closingTime: "14:20",
      shopDescription: "Best shop in town for all your needs.",
      shopMission: "To provide the best service and products.",
      
    }
  ]);


  const shopId = 1;

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


  return (
    <div className='recommended-section'>
        {shops.map((shop, index) => (
        <Container key={index} className='position-relative py-5 rounded'>
            <div className='bg-shape position-absolute'>
            </div>
            <div className='row justify-content-end'>
                <div className='col-md-6 col-lg-3 z-2'>
                    <h3 className='text-light text-capitalize fw-semibold'>Our Mission</h3>
                    <p className='text-light'>{shop.shopMission}</p>
                    <a className='text-light text-capitalize text-decoration-none fw-semibold' href="/reservation">Reserve now</a>
                </div>
            </div>
        </Container>
      ))}
    </div>
  )
}

export default ShopMission;