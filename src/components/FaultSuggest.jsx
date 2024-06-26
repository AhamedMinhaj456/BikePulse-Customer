import React from "react";
import './FaultSuggest.css'
import { useNavigate } from "react-router-dom";
import Rightbar from "./RightBar";
import suggestionIcon from "../assets/suggestionIcon.png";
import tickmark from "../assets/tickmark.png";
import star2 from "../assets/star2.png";
import velocare from "../assets/velocare.png"
import location from "../assets/location.png";




function FaultSuggest(){
    const generateOptions = () => {
        
        const numFaults = 10;
        const options = [];

        for (let i = 1; i <= numFaults; i++) {
            options.push(<option key={i} value={`Fault ${i}`}>{`Fault ${i}`}</option>);
        }

        return options;
    };

    // Function to handle next button click
    const handleNext = () => {
        // Add your logic here
    };
    const navigate = useNavigate();
    const handleViewButtonClick = () => {
        navigate("/shopdashboard");
    }
  
    return(
        <div className="suggestion-container">
        <Rightbar/>
      <div className="suggestion-content">
        <p className="suggestion-content-text">Embark on a seamless journey with our services,<br></br> offering hassle-free online reservations, <br></br>personalized fault suggestions, and a <br></br>meticulously filtered selection of bike parts just for<br></br> you.</p>
        <img src={suggestionIcon} className="suggestion-img" alt="Suggestion Icon" />
      </div>
      <div className="suggestion-content-overlay">
        <p className="suggestion-content-overlay-text">Kindly share any specific issues or faults you've experienced with your bike to help us <br></br>enhance our services and provide you with a better experience.</p>
      </div>
      <div className="suggestion-form">
      <p className="suggestion-form-text">Get Started</p>

      </div>
      {Array.from({ length: 10 }, (_, index) => (
                <div key={index} className="fault-dropdown-container">
                    <p className="fault-text">Fault {index + 1}</p>
                    <div className="dropdown-button-container">
                        <select className="fault-dropdown" style={{ backgroundColor: '#F5FBFF' }} defaultValue="" placeholder="Select Options">
                            <option value="" disabled hidden>Select Options</option>
                            {generateOptions()}
                        </select>
                      
                    </div>
                    <button className="fault-button-form" onClick={handleNext}>Next</button>
                </div>
            ))}
            <div className="comment-container">
            <p className="comment-text">Additional Comments</p>
            <textarea className="comment-box" placeholder="Enter Additional comments here"></textarea>
            <button className="comment-button" onClick={handleNext}>Next</button>

            </div>
            <div className="parts-container">
                <p className="comment-text">Parts Suggestion</p>
                <div className="boxes-container">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
    </div>
    <button className="comment-button" onClick={handleNext}>Next</button>
            </div>
            <div className="faults-sub-container">
                <p className="comment-text">Shops Suggestion</p>
                <div className="sub-cards">
                    <div className="sub-cards-container">
                        <div className="top-rectangle"> </div>
                        <div className="bottom-rectangle">
                            <div className="velocare-get-direction">

                                <div class="column">

                                    <p>No 24 Main Street,
                                        Piyagama</p>
                                    <p>+94 26 555 4623</p>
                                    <p>
                                        <img src={location} alt="Location Image" />
                                        <a href="#" className="direction-link">Get Direction</a>
                                    </p>

                                </div>
                            </div>
                            <img src={velocare} />
                            <span className="velocare-txt">Velocare</span>


                            <div className="stars2">4.8
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                            </div>
                            <div class="details-content">
                                <p>Opens daily 8.00 AM - 6.00 PM</p>
                                <p><img src={tickmark} alt="Tick Mark" />Full services</p>
                                <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                            </div>
                            <span className="view-text" onClick={handleViewButtonClick}>SELECT</span>

                        </div>
                    </div>
                    <div className="sub-cards-container">
                        <div className="top-rectangle"></div>
                        <div className="bottom-rectangle">
                            <div className="velocare-get-direction">

                                <div class="column">

                                    <p>No 24 Main Street,
                                        Piyagama</p>
                                    <p>+94 26 555 4623</p>
                                    <p>
                                        <img src={location} alt="Location Image" />
                                        <a href="#" className="direction-link">Get Direction</a>
                                    </p>

                                </div>
                            </div>
                            <img src={velocare} />
                            <span className="velocare-txt">Velocare</span>


                            <div className="stars2">4.8
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                            </div>
                            <div class="details-content">
                                <p>Opens daily 8.00 AM - 6.00 PM</p>
                                <p><img src={tickmark} alt="Tick Mark" />Full services</p>
                                <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                            </div>
                            <span className="view-text" onClick={handleViewButtonClick}>SELECT</span>

                        </div>
                    </div>
                    <div className="sub-cards-container">
                        <div className="top-rectangle"></div>
                        <div className="bottom-rectangle">
                            <div className="velocare-get-direction">

                                <div class="column">

                                    <p>No 24 Main Street,
                                        Piyagama</p>
                                    <p>+94 26 555 4623</p>
                                    <p>
                                        <img src={location} alt="Location Image" />
                                        <a href="#" className="direction-link">Get Direction</a>
                                    </p>

                                </div>
                            </div>
                            <img src={velocare} />
                            <span className="velocare-txt">Velocare</span>


                            <div className="stars2">4.8
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                                <img src={star2} alt="Star" className="star" />
                            </div>
                            <div class="details-content">
                                <p>Opens daily 8.00 AM - 6.00 PM</p>
                                <p><img src={tickmark} alt="Tick Mark" />Full services</p>
                                <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                            </div>
                            <span className="view-text" onClick={handleViewButtonClick}>SELECT</span>

                        </div>
                    </div>
                </div>
    <button className="comment-button" onClick={handleNext}>Make a Reservation</button>
    <button className="comment-button" onClick={handleNext}>Explore More</button>
            </div>
    </div>
     
    );

}

export default FaultSuggest;