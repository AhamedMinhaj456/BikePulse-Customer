import React, { useState , useEffect} from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Feedback from "react-bootstrap/esm/Feedback";
import axios from "axios";



function FeedbackForm() {
    const customerId = useSelector((state) => state.customers);
    const shopId = useSelector((state) => state.shops);
    const navigate = useNavigate();
const [feedbackData, setFeedbackData] = useState({
    rating: '',
    comment: '',
    shopId: '',
    customerId: '',
    serviceId: '',
    reservationId: '',
    image: null
  });

  const handleChange = (e) => {
    setFeedbackData({
      ...feedbackData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    setFeedbackData({
      ...feedbackData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('rating', feedbackData.rating);
    formData.append('comment', feedbackData.comment);
    formData.append('shopId', feedbackData.shopId);
    formData.append('customerId', feedbackData.customerId);
    formData.append('serviceId', feedbackData.serviceId);
    formData.append('reservationId', feedbackData.reservationId);
    formData.append('image', feedbackData.image);

    try {
      const response = await axios.post('http://localhost:8095/feedback/addfeedback', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      // Optionally, handle success message or redirect after successful submission
      navigate('/dash');
    } catch (error) {
      console.error('Error adding feedback:', error);
      // Optionally, handle error message or show error to the user
    }
  };
 
  
  return (

    <div className="container">
    <h2>Add Feedback</h2>
    <div className="reservation-title">
            <h2>Current Customer ID: {customerId || "None"}</h2>
        </div>
        <div className="reservation-title">
            <h2>Current Shop ID: {shopId || "None"}</h2>
        </div>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="rating" className="form-label">Rating</label>
        <input type="text" className="form-control" id="rating" name="rating" value={feedbackData.rating} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="comment" className="form-label">Comment</label>
        <textarea className="form-control" id="comment" name="comment" value={feedbackData.comment} onChange={handleChange}></textarea>
      </div>
      <div>
           <label>Feedback Image:</label>
           <input type="file" accept="image/*" onChange={handleImageChange} />
         </div>
      
      <div className="mb-3">
        <label htmlFor="serviceId" className="form-label">Service ID</label>
        <input type="text" className="form-control" id="serviceId" name="serviceId" value={feedbackData.serviceId} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="reservationId" className="form-label">Reservation ID</label>
        <input type="text" className="form-control" id="reservationId" name="reservationId" value={feedbackData.reservationId} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>

  );

}
export default FeedbackForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// const FeedbackForm = () => {
//   const [feedbackData, setFeedbackData] = useState({
//     rating: '',
//     comment: '',
//     shopId: '',
//     customerId: '',
//     serviceId: '',
//     reservationId: '',
//     image: null
//   });

//   const handleInputChange = (e) => {
//     setFeedbackData({
//       ...feedbackData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleImageChange = (e) => {
//     setFeedbackData({
//       ...feedbackData,
//       image: e.target.files[0]
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('rating', feedbackData.rating);
//     formData.append('comment', feedbackData.comment);
//     formData.append('shopId', feedbackData.shopId);
//     formData.append('customerId', feedbackData.customerId);
//     formData.append('serviceId', feedbackData.serviceId);
//     formData.append('reservationId', feedbackData.reservationId);
//     formData.append('image', feedbackData.image);

//     try {
//       const response = await axios.post('http://localhost:8095/feedback/add', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log(response.data);
//       // Optionally, handle success message or redirect after successful submission
//     } catch (error) {
//       console.error('Error adding feedback:', error);
//       // Optionally, handle error message or show error to the user
//     }
//   };

//   return (
//     <div>
//       <h2>Add Feedback</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Rating:</label>
//           <input type="text" name="rating" value={feedbackData.rating} onChange={handleInputChange} />
//         </div>
//         <div>
//           <label>Comment:</label>
//           <input type="text" name="comment" value={feedbackData.comment} onChange={handleInputChange} />
//         </div>
//         <div>
//           <label>Shop ID:</label>
//           <input type="text" name="shopId" value={feedbackData.shopId} onChange={handleInputChange} />
//         </div>
//         <div>
//           <label>Customer ID:</label>
//           <input type="text" name="customerId" value={feedbackData.customerId} onChange={handleInputChange} />
//         </div>
//         <div>
//           <label>Service ID:</label>
//           <input type="text" name="serviceId" value={feedbackData.serviceId} onChange={handleInputChange} />
//         </div>
//         <div>
//           <label>Reservation ID:</label>
//           <input type="text" name="reservationId" value={feedbackData.reservationId} onChange={handleInputChange} />
//         </div>
//         <div>
//           <label>Feedback Image:</label>
//           <input type="file" accept="image/*" onChange={handleImageChange} />
//         </div>
//         <button type="submit">Submit Feedback</button>
//       </form>
//     </div>
//   );
// };

// export default FeedbackForm;

