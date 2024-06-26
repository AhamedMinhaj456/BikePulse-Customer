// import React,{useState} from "react";
// import { Link,useNavigate } from "react-router-dom";
// import './Register3.css';
// import axios from "axios";
// import sideImage from "../assets/sideimage.png"
// import verification from "../assets/verification.png";

// function Register3(){
//     const[userName, setUserName] = useState("");
//     const [userPassword,setUserPassword]= useState("");
//     async function saveUser(event){
//         event.preventDefault();
//         try{
//             await
//             axios.post("http://localhost:8095/customer/save",{
//                 userName: userName,
//                 userPassword:userPassword,

//             });
//             alert("User Registration Successful");
//             navigate('/shops');
//         }catch(err){
//             alert(err);
//         }
//     }
//     const navigate = useNavigate();

//     const handleRegisterButtonClick = () => {
//         navigate("/shops");
//     };
//  return(
//     <div className="register-container">
//     <div className="form-register-container">
//         <p className="register-text">REGISTER NOW</p>
//         <form>
//         <div className="registration-steps">
//         <div className="step">1</div>
//         <div className="step">2</div>
//         <div className="step active">3</div>
//     </div>
   

//             <div className="input-group">
//                 <label htmlFor="username">User Name</label>
//                 <input type="text" id="username" placeholder="Enter UserName"
//                  value={userName}
//                         onChange={(e) => setUserName(e.target.value)}  />

//             </div>
//             <div className="input-group">
//                         <label htmlFor="password">Password</label>
//                         <input type="password" id="password" placeholder="Enter Password" 
//                              value={userPassword} onChange={(e) => setUserPassword(e.target.value)}
//                         />
//                     </div>
                
//                     <div className="checkbox-container">
//                         <input type="checkbox" id="robotCheckbox" />
//                         <label htmlFor="robotCheckbox">I am not a robot</label>
//                         <img src={verification} alt="Robot" className="robot-image" />
                        
//                     </div>
//                     <div> 
//                      <input type="checkbox" id="termsCheckbox" />
//                     Yes, I accept all the <span className="terms-conditions">Terms and Conditions</span> of BikePulse</div>
                    
                    
                   
           
            
          
   
//             <button type="button" className="register-button-form" onClick={handleRegisterButtonClick}>Register</button>
//         </form>
//         <div className="seperator">
//             <span>Or</span>
//         </div>
//         <div className="register-link">
//         Already Have an Account? <Link to="/login">Click here</Link>.
//         </div>

//     </div>
//     <div className="image-container">
//         <img src={sideImage} alt="Login" />
//     </div>
// </div>
//  );
// }


// export default Register3;