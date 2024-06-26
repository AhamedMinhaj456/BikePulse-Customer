import React from 'react';
import './ContactUsSection.css';
import Container from 'react-bootstrap/Container';
import GreenBtn from '../GreenBtn/GreenBtn';

function ContactUsSection(props) {
  return (
    <div className='holiday-plan-section py-5'>
        <Container className='h-100 d-flex flex-column align-items-start justify-content-end'>
            <h3 className='text-start text-light text-capitalize fw-semibold'>{props.itemHolidayPlanTitle}</h3>
            <p className='text-start text-light'><strong>Bike Pulse</strong></p>
            <GreenBtn btnTitle='Contact Us' />
        </ Container>
    </div>
  )
}

export default ContactUsSection;