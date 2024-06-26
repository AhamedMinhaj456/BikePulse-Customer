import React from 'react';
import './CustomerAgreement.css';

const CustomerAgreement = () => {
    return (
        <div className="customer-agreement">
            <div className="header">
                <h1>Customer Agreement</h1>
                <p>Effective Date: [Insert Date]</p>
            </div>
            <div className="content">
                <section>
                    <h2>1. Introduction</h2>
                    <p>Welcome to Bike Pulse. This Customer Agreement ("Agreement") governs your use of our platform and services. By accessing or using our platform, you agree to be bound by this Agreement.</p>
                </section>

                <section>
                    <h2>2. Services Provided</h2>
                    <p>Bike Pulse provides a platform for bike service reservations and management. Customers can book services, make payments, and track the status of their bike service through our user-friendly dashboard.</p>
                </section>

                <section>
                    <h2>3. Account Registration</h2>
                    <p>To use our services, you must register for an account. You agree to provide accurate and complete information during the registration process and to keep this information up to date.</p>
                </section>

                <section>
                    <h2>4. Payment Terms</h2>
                    <p>Customers are required to pay for services at the time of booking. All payments are processed securely through our platform. We accept various payment methods as indicated on our website.</p>
                </section>

                <section>
                    <h2>5. Cancellations and Refunds</h2>
                    <p>Customers may cancel their reservations up to [insert time frame] before the scheduled service time for a full refund. Cancellations made after this period may not be eligible for a refund.</p>
                </section>

                <section>
                    <h2>6. User Conduct</h2>
                    <p>You agree to use our platform and services in a manner consistent with all applicable laws and regulations. You will not engage in any conduct that could harm the platform, our services, or other users.</p>
                </section>

                <section>
                    <h2>7. Limitation of Liability</h2>
                    <p>To the fullest extent permitted by law, Bike Pulse shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to this Agreement or your use of our services.</p>
                </section>

                <section>
                    <h2>8. Changes to This Agreement</h2>
                    <p>We may update this Agreement from time to time. The updated version will be indicated by an updated "Effective Date" and the updated version will be effective as soon as it is accessible.</p>
                </section>

                
            </div>
        </div>
    );
};

export default CustomerAgreement;
