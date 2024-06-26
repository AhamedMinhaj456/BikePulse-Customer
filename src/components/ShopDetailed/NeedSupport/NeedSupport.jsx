import React, { useState, useEffect } from "react";
import "./NeedSupport.css";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useSelector } from "react-redux";

function NeedInspirationSection() {
  const shopId = useSelector((state) => state.shops);

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
      shopMission: "To provide the best service and products."
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

  return (
    <div className="need-inspiration-section py-5 position-relative">
      <div className="bg-shape position-absolute"></div>
      <Container>
        {shops.map((shop, index) => (
          <div className="row">
            <div className="col-md-4 z-2">
              <h2 className="text-start text-light text-capitalize fw-semibold">
                Need Support?
              </h2>
              <p className="text-start text-light">
                <strong>Come Directly to {shop.shopName}</strong>
                <br></br>
                {shop.shopAddress}
              </p>
              <div className="d-flex">
                <h5 className="text-light text-capitalize fw-semibold text-nowrap">
                  Call us:
                </h5>
                <a
                  href="/"
                  className="text-light mx-2 text-decoration-none h5 fw-semibold"
                >
                  {shop.contactNumber}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default NeedInspirationSection;
