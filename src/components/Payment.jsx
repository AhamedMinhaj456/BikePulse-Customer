import React from "react";
import './Payment.css';
import paymentcard from '../assets/card_img.png';

function Payment(){
    return(
        <div className="payment-container">

    <form action="">

        <div className="payment-row">

            <div className="payment-col">

                <h3 className="payment-title">billing address</h3>

                <div className="payment-inputBox">
                    <span>Full name :</span>
                    <input type="text" placeholder="John Deo"/>
                </div>
                <div className="payment-inputBox">
                    <span>Email :</span>
                    <input type="email" placeholder="Example@example.com"/>
                </div>
                <div className="payment-inputBox">
                    <span>Address :</span>
                    <input type="text" placeholder="Room - Street - Locality"/>
                </div>
                <div className="payment-inputBox">
                    <span>City :</span>
                    <input type="text" placeholder="Ja ela"/>
                </div>

                <div className="payment-flex">
                    <div className="payment-inputBox">
                        <span>State :</span>
                        <input type="text" placeholder="Sri Lanka"/>
                    </div>
                    <div className="payment-inputBox">
                        <span>Zip code :</span>
                        <input type="text" placeholder="123 456"/>
                    </div>
                </div>

            </div>

            <div className="payment-col">

                <h3 className="payment-title">Payment</h3>

                <div className="payment-inputBox">
                    <span>Cards Accepted :</span>
                    <img src={paymentcard} alt="Bank Cards"/>
                </div>
                <div className="payment-inputBox">
                    <span>Name On Card :</span>
                    <input type="text" placeholder="Mr. John Deo"/>
                </div>
                <div className="payment-inputBox">
                    <span>Credit Card Number :</span>
                    <input type="number" placeholder="1111-2222-3333-4444"/>
                </div>
                <div className="payment-inputBox">
                    <span>Exp Month :</span>
                    <input type="text" placeholder="january"/>
                </div>

                <div className="payment-flex">
                    <div className="payment-inputBox">
                        <span>Exp Year :</span>
                        <input type="number" placeholder="2022"/>
                    </div>
                    <div className="payment-inputBox">
                        <span>CVV :</span>
                        <input type="text" placeholder="1234"/>
                    </div>
                </div>

            </div>
    
        </div>

        <input type="submit" value="Proceed To Checkout" className="payment-submit-btn"/>

    </form>

</div>    
    
    );

}

export default Payment;