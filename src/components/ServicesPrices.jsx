import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import Header from '../components/dashboard/components/Header';
import './ServicesPrices.css';
import axios from 'axios';

const ServicePrices = ({ reservationId }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   if (reservationId) {
  //     fetchReservationDetails();
  //   }
  // }, [reservationId]);

  // const fetchReservationDetails = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:8095/reservation/reservationDetails/${reservationId}`);
  //     setServices(response.data.services); // Assuming services are returned as an array in response.data.services
  //     setLoading(false);
  //   } catch (error) {
  //     console.error('Error fetching reservation details:', error);
  //     setError('Error fetching reservation details');
  //     setLoading(false);
  //   }
  // };

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <Box m="20px">
      <Header subtitle={`Details of reservation ID ${reservationId}`} />
      <Paper className="reservation-details-container">
        {services.map(service => (
          <Box key={service.id} display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{ "& > div": { gridColumn: "span 4" } }}>
            <Box sx={{ gridColumn: "span 2", display: "flex", alignItems: "center" }}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="h6" className="detail-title">Service Name:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" className="detail-value">{service.serviceName}</Typography>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ gridColumn: "span 2", display: "flex", alignItems: "center" }}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="h6" className="detail-title">Description:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" className="detail-value">{service.description}</Typography>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ gridColumn: "span 2", display: "flex", alignItems: "center" }}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="h6" className="detail-title">Price:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" className="detail-value">${service.price}</Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        ))}
      </Paper>
      <Box className="center-container">
        <button className="back-button-1" onClick={() => window.location.reload()}>
          Back
        </button>
      </Box>
    </Box>
  );
};

export default ServicePrices;
