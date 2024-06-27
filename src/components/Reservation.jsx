import React, { useState, useEffect } from "react";
import './Reservation.css';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Reservation() {
  const navigate = useNavigate();
  const [motorbikeNumber, setMotorbikeNumber] = useState('');
  const [faultId, setFaultId] = useState('');
  const [service, setService] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [reservationAddress, setReservationAddress] = useState('');
  const customerId = useSelector((state) => state.customers);
  const shopId = useSelector((state) => state.shops);

  const [serviceDropdownOptions, setServiceDropdownOptions] = useState([]);
  const [serviceSelectedOption, setServiceSelectedOption] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveData();
    console.log('Reservation submitted:', { motorbikeNumber, faultId, service, reservationDate, reservationTime, reservationAddress });
  };

  const saveData = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8095/reservation/addReservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          faultId,
          serviceType: serviceSelectedOption,
          reservationDate,
          reservationTime,
          customerId,
          shopId,
          motorbikeNumber,
          reservationAddress
        }),
      });
      const data = await response.json();
      alert('Reservation Added Successfully:', data);
      navigate('/ManageReservations');
    } catch (error) {
      console.error('Error saving data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("customerId ",customerId," ShopID ",shopId)
    const fetchServiceDropdownOptions = async () => {
      try {
        const response = await fetch('http://localhost:8095/serviceType/serviceType');
        const data = await response.json();
        const dropdownOptions = data.map((serviceType) => serviceType.serviceType);
        setServiceDropdownOptions(dropdownOptions);
      } catch (error) {
        console.error('Error fetching dropdown options:', error);
      }
    };
    fetchServiceDropdownOptions();
  }, []);

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const isWeekend = (date) => {
    const day = new Date(date).getDay();
    return day === 0 || day === 6; // 0 = Sunday, 6 = Saturday
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let i = 8; i <= 16; i++) {
      times.push(`${String(i).padStart(2, '0')}:00:00`);
      if (i !== 16) {
        times.push(`${String(i).padStart(2, '0')}:30:00`);
      }
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  return (
    <div className="reservation-content">
      <div className="reservation-container">
        <h2 className="reservation-title">Online Reservation</h2>
        
        {loading ? (
          <div className="loading-spinner"></div>
        ) : (
          
          <form onSubmit={handleSubmit} className="reservation-form">
            <input className="reservation-input" type="text" placeholder="Bike Number" value={motorbikeNumber} onChange={(e) => setMotorbikeNumber(e.target.value)} />
            <input className="reservation-input" type="text" placeholder="Fault (If Any)" value={faultId} onChange={(e) => setFaultId(e.target.value)} />
            <select className="reservation-dropdown" value={serviceSelectedOption} required onChange={(e) => setServiceSelectedOption(e.target.value)}>
              <option value="">Service Type</option>
              {serviceDropdownOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <input
              className="reservation-input"
              type="date"
              value={reservationDate}
              onChange={(e) => {
                const selectedDate = e.target.value;
                if (isWeekend(selectedDate)) {
                  alert("Saturday and Sunday cannot be selected.");
                } else {
                  setReservationDate(selectedDate);
                }
              }}
              min={getTodayDate()}
              required
            />
            <select
              className="reservation-dropdown"
              value={reservationTime}
              onChange={(e) => setReservationTime(e.target.value)}
              required
            >
              <option value="">Select Time</option>
              {timeOptions.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <textarea className="reservation-note" placeholder="Reservation Note" value={reservationAddress} onChange={(e) => setReservationAddress(e.target.value)} />
            <button className="reservation-button" type="submit">Submit Reservation</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Reservation;
