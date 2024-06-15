import React, { useState , useEffect} from "react";
import './Reservation.css';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


function Reservation() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [motorbikeNumber, setmotorbikeNumber] = useState('');
  const [faultId, setfaultId] = useState('');
  const [service, setService] = useState('');
  const [reservationDate, setreservationDate] = useState('');
  const [reservationTime, setreservationTime] = useState('');
  const [reservationAddress, setReservationAddress] = useState('');
  const customerId = useSelector((state) => state.customers);
  const shopId = useSelector((state) => state.shops);
  const handleSubmit = (e) => {
    e.preventDefault();
    saveData();

    console.log('Reservation submitted:', { motorbikeNumber, faultId, service, reservationDate, reservationTime, reservationAddress});
  };





  const [serviceDropdownOptions, setServiceDropdownOptions] = useState([]);
  const [serviceSelectedOption, setServiceSelectedOption] = useState('');

   // Function to handle dropdown change
  
   const serviceDropdownChange = (e) => {
    setService(e.target.value);
  };

   // Function to save data to the database
  
   const saveData = async () => {
    try {
      const response = await fetch('http://localhost:8095/reservation/addReservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          
          faultId,
          serviceType:serviceSelectedOption,
          reservationDate,
          reservationTime,
          customerId,
          shopId,
          motorbikeNumber,
          reservationAddress
        }),
      });
      const data = await response.json();
      alert('Data saved successfully:', data);
      navigate('/Shops');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  // Fetch dropdown options from the database
  {

    useEffect(() => {
      const fetchServiceDropdownOptions = async () => {
        try {
          const response = await fetch('http://localhost:8096/serviceType/serviceType');
          const data = await response.json();
          const dropdownOptions = data.map((serviceType) => serviceType.serviceType);
          setServiceDropdownOptions(dropdownOptions);
        } catch (error) {
          console.error('Error fetching dropdown options:', error);
        }
      };
  
      fetchServiceDropdownOptions();
    }, []);
  }
  return (

    <div className="resrvation-content">
    <div className="reservation-container">
        <h2 className="reservation-title">Online Reservation</h2>
        <div className="reservation-title">
            <h2>Current Customer ID: {customerId || "None"}</h2>
        </div>
        <div className="reservation-title">
            <h2>Current Shop ID: {shopId || "None"}</h2>
        </div>
        <form onSubmit={handleSubmit} className="reservation-form">
            <input className="reservation-input" type="text" placeholder="Bike Number" value={motorbikeNumber} onChange={(e) => setmotorbikeNumber(e.target.value)} />
            <input className="reservation-input" type="text" placeholder="Fault" value={faultId} onChange={(e) => setfaultId(e.target.value)} required />
            <select className="reservation-input" value={serviceSelectedOption} required onChange={(e) => setServiceSelectedOption(e.target.value)}>
                <option value="">Service Type</option>
                {serviceDropdownOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <input className="reservation-input" type="date" value={reservationDate} onChange={(e) => setreservationDate(e.target.value)} />
            <input className="reservation-input" type="time" step="1" value={reservationTime} onChange={(e) => setreservationTime(e.target.value)} />
            <input className="reservation-input" type="text" placeholder="Reservation Address" value={reservationAddress} onChange={(e) => setReservationAddress(e.target.value)} required />
            <button className="reservation-input" type="submit">Submit Reservation</button>
        </form>
    </div>
</div>


  );

}
export default Reservation;
