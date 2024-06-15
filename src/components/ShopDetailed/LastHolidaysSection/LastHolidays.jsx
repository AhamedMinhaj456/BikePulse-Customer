import React from 'react';
import './LastHolidays.css';
import Container from 'react-bootstrap/Container';
import LastHolidaysItems from './LastHolidayItems';
import LastHolidayCard from './LastHolidayCard';

function LastHolidaysSection() {
  return (
    <div className='last-holidays-section my-4 my-sm-5'>
        <Container>
            <h2 className='text-uppercase fw-semibold my-4 my-sm-5 pt-lg-4'>Make More Comfortable With Us</h2>
            <div className="row g-4">
                {
                    LastHolidaysItems.map((item) => 
                    <LastHolidayCard key={item.id} 
                    itemImage={item.itemImage} 
                    itemTitle={item.itemTitle} 
                    itemDescription={item.itemDescription} />)
                }
            </div>
        </Container>
    </div>
  )
}

export default LastHolidaysSection;