import React from 'react';
import './ShopHome.css';
import HeroSection from './HeroSection/HeroSection';
import SearchForm from './SearchForm/SearchForm';
import LastHolidaysSection from './LastHolidaysSection/LastHolidays';
import ShopMission from './ShopMission/ShopMission';
import HolidayPlanSection from './ContactUsSection/ContactUsSection';
import FavouritesSection from './FavouriteSection/FavouriteSection';
import ShopFeedbacks from './ShopFeedbacks/ShopFeedbacks';
import NeedInspirationSection from './NeedSupport/NeedSupport';
import ShopDetails from './ShopDetails/ShopDetails';

function ShopHome() {
    return (
        <div className='home-page'>
            <ShopDetails/>
            {/* <HeroSection /> */}
            {/* <SearchForm /> */}
            <LastHolidaysSection />
            <div className="my-4 my-sm-5">
                <ShopMission itemRecommendedTitle='Recommended for you' />
            </div>
            <HolidayPlanSection itemHolidayPlanTitle='Make Your Bike More comfortable with Us' />
            <FavouritesSection />
            <NeedInspirationSection />
            <ShopFeedbacks />
            
            
        </div>
    )
}

export default ShopHome;