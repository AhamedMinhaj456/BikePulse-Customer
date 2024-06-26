import React from 'react';
import './Promotion.css';

const Promotion = () => {
    return (
        <div className="promotion-container">
            <div className="promotion-header">
                <h1>Special Promotions</h1>
                <p>Don't miss out on our exclusive offers!</p>
            </div>
            <div className="promotion-content">
                <div className="promotion-card">
                    <i className="fas fa-bicycle"></i>
                    <h3>Bike Service Discount</h3>
                    <p>Get 20% off on all bike services this month!</p>
                </div>
                <div className="promotion-card">
                    <i className="fas fa-tools"></i>
                    <h3>Free Tune-Up</h3>
                    <p>Free tune-up with every major service package.</p>
                </div>
                <div className="promotion-card">
                    <i className="fas fa-gift"></i>
                    <h3>Gift Vouchers</h3>
                    <p>Buy one gift voucher and get another one free!</p>
                </div>
            </div>

            <div className="shop-promotion-container">
            <div className="shop-promotion-header">
                <h1>Special Promotions for Shop Owners</h1>
                <p>Unlock exclusive benefits when you register your shop on our platform!</p>
            </div>
            <div className="shop-promotion-content">
                <div className="shop-promotion-card">
                    <i className="fas fa-percent"></i>
                    <h3>Discount on Fees</h3>
                    <p>Get 50% off on your first three months of subscription fees.</p>
                </div>
                <div className="shop-promotion-card">
                    <i className="fas fa-chart-line"></i>
                    <h3>Free Marketing</h3>
                    <p>Enjoy free marketing services to promote your shop for the first month.</p>
                </div>
                <div className="shop-promotion-card">
                    <i className="fas fa-users"></i>
                    <h3>Priority Support</h3>
                    <p>Access priority customer support to resolve your queries swiftly.</p>
                </div>
            </div>
        </div>
        </div>

        
    );
};

export default Promotion;
