// import React,{useState} from "react";
// import './Login.css';
// import sideImage from "../assets/sideimage.png"
// import { Link,useNavigate } from "react-router-dom";
// import axios from "axios";

// function Login() {

//     const[userName, setUserName] = useState("");
//     const [userPassword,setUserPassword]= useState("");
//     const navigate = useNavigate();

   
//     async function userLogin(event) {
//         event.preventDefault();
//         try {
//           await axios.post("http://localhost:8095/customer/login", {
//             userName: userName,
//             userPassword: userPassword,
//           });
//           alert("user Login Successful");
//           navigate('/shops'); 
//         } catch (err) {
//           alert(err);
//         }
//       }
//     return (
//         <div className="login-container">
//             <div className="form-container">
//                 <p className="login-text">LOG IN</p>
//                 <form>
//                     <div className="input-group">
//                         <label htmlFor="username">User Name</label>
//                         <input type="text" id="username" placeholder="Enter UserName" value={userName}
//                         onChange={(e) => setUserName(e.target.value)} />

//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="password">Password</label>
//                         <input type="password" id="password" placeholder="Enter Password" 
//                             value={userPassword} onChange={(e) => setUserPassword(e.target.value)}
//                         />
//                     </div>
//                     <div className="forget-remember">
//                     <div className="remember-me">
//                         <input type="checkbox" id="remember-me" />
//                         <label htmlFor="remember-me">Remember me</label>

//                     </div>
//                     <div className="forget-password">
//     <Link to="/forgetpw">Forget Password</Link>
// </div>

//                     </div>
//                     <button type="submit" className="login-button-form">Log in</button>
//                 </form>
//                 <div className="seperator">
//                     <span>Or</span>
//                 </div>
//                 <div className="signup-link">
//                 Don't have an account? <Link to="/register">Click here</Link>
//                 </div>

//             </div>
//             <div className="image-container">
//                 <img src={sideImage} alt="Login" />
//             </div>
//         </div>

//     );

// }

// export default Login;