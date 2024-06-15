import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ShopFeedbacksCard(props) {
  // Function to generate star icons based on the rating
  const renderStars = (rating) => {
    const stars = [];

    // Render 5 stars
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i}>&#9733;</span>); // Full star
      } else {
        stars.push(<span key={i}>&#9734;</span>); // Empty star
      }
    }

    return stars;
  };

  return (
    <div className="col-lg-6">
      <Card className="shadow d-flex flex-sm-row h-100 overflow-hidden">
        <div className="img-div img-hover col-sm-6">
          <img
            src={`data:image/jpeg;base64,${props.feedbackImage}`}
            alt={`image_${props.feedbackId}`}
          />
        </div>
        <div className="col-sm-6">
          <Card.Body className="p-4">
            <Card.Title className="text-start text-uppercase fw-bold">
              {props.customerName.substring(0, 5) +
                "*".repeat(Math.max(props.customerName.length - 5, 0))}
            </Card.Title>

            <ul className="list-unstyled">
              <li className="text-start">{renderStars(props.rating)}</li>
              <li className="text-start">{props.comment}</li>
              {/* Add more details here */}
            </ul>
            
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default ShopFeedbacksCard;
