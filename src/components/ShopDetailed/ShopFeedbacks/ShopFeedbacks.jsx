import React, { useState, useEffect } from "react";
import "./ShopFeedbacks.css";
import Container from "react-bootstrap/Container";
import ShopFeedbacksCard from "./ShopFeedbacksCard";
import axios from "axios";

import { useSelector } from 'react-redux';

function ShopFeedbacks() {
  const shopId = useSelector((state) => state.shops);
  const [specialOfferItems, setSpecialOfferItems] = useState([
    {
      feedbackId: 1,
      rating: 5,
      feedbackImage: 'https://via.placeholder.com/150', // Placeholder image URL
      customerName: 'John Doe',
      comment: 'Amazing experience! Highly recommend.'
    },
    {
      feedbackId: 2,
      rating: 4,
      feedbackImage: 'https://via.placeholder.com/150', // Placeholder image URL
      customerName: 'Jane Smith',
      comment: 'Great service, will come back again.'
    }
  ]);

  useEffect(() => {
    fetchFeedbackDetails();
  }, []);

  const fetchFeedbackDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8095/feedback/shopId/${shopId}`);
      setSpecialOfferItems(response.data);
      console.log("API response:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="special-offers my-4 my-sm-5">
      <Container>
        <h2 className="text-uppercase fw-semibold mb-4 mb-sm-5">
          Customer Reviews
        </h2>
        {specialOfferItems.length > 0 ? (
          <div className="row g-4">
            {specialOfferItems.map((feedback) => (
              <ShopFeedbacksCard
                key={feedback.feedbackId}
                rating={feedback.rating}
                feedbackImage={feedback.feedbackImage}
                customerName={feedback.customerName}
                comment={feedback.comment}
              />
            ))}
          </div>
        ) : (
          <p>No Customer Reviews yet in this shop</p>
        )}
      </Container>
    </div>
  );
}

export default ShopFeedbacks;
