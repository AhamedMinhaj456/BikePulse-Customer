import React from "react";
import './ReservationHistory.css';

const reservationData = [
   { id: 1, date: '2024-05-24', time: '15:00', location: 'Restaurant A' },
   { id: 2, date: '2024-05-25', time: '18:30', location: 'Restaurant B' },
   { id: 3, date: '2024-05-26', time: '12:00', location: 'Restaurant C' },
 ];
 

 const ReservationHistory = () => {
   return (
     <div className="reservation-history">
       <h2>Reservation History</h2>
       <div className="reservation-list">
         {reservationData.map(reservation => (
           <div key={reservation.id} className="reservation-item">
             <div className="reservation-details">
               <p>Date: {reservation.date}</p>
               <p>Time: {reservation.time}</p>
               <p>Location: {reservation.location}</p>
             </div>
           </div>
         ))}
       </div>
     </div>
   );
 };

 export default ReservationHistory;