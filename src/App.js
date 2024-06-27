import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus";
import Shops from "./components/Shops";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ForgotPw from "./components/ForgotPw";
import FaultSuggest from "./components/FaultSuggest";
import ShopsNavbar from "./components/ShopsNavbar";
import Reservation from "./components/Reservation";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Payment from "./components/Payment";
import Fault from "./components/Fault";
import Cart from "./components/Cart";
import PrivacyPolicy from "./components/PrivacyPolicy"



/*import Topbar from "./components/dashboard/scenes/global/Topbar"
import Topbar from "./components/dashboard/scenes/global/Topbar";
import Sidebar from "./components/dashboard/scenes/global/Sidebar";
import Dashboard from "./components/dashboard/scenes/dashboard";
import ManageReservations from "./components/dashboard/scenes/ManageReservations";
import PaymentReservations from "./components/dashboard/scenes/payments";
import ReservationHistory from "./components/dashboard/scenes/history";
import Bar from "./components/dashboard/scenes/bar";
import Form from "./components/dashboard/scenes/form";
import Line from "./components/dashboard/scenes/line";
import Pie from "./components/dashboard/scenes/pie";
import FAQ from "./components/dashboard/scenes/faq";
import Geography from "./components/dashboard/scenes/geography";
import Calendar from "./components/dashboard/scenes/calender/calender";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./components/theme";
import Chatbot from "./components/Chatbot";*/
import DashboardLayout from "./components/DashboardLayout";
import ShopHome from "./components/ShopDetailed/ShopHome";
import FileUpload from "./components/FileUpload"
import './App.css';
import { Provider } from "react-redux";
import store  from "./Store/Store";
import CustomerAgreement from "./components/CusomerAgreement";
import ContactUs from "./components/ContactUs";
import Promotion from "./components/Promotions";


import AuthProvider from "./Utils/AuthProvider";
import ProtectedRoute from "./Utils/ProtecedRoute"; 
import ServicePrices from "./components/ServicesPrices";


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/forgotpw" element={<ForgotPw />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/agreement" element={<CustomerAgreement/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/promotion" element={<Promotion/>}/>
        <Route path="/shops" element={<Shops />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute/>}>
        
        
        
        <Route path="/faultsuggest" element={<FaultSuggest />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account-setting" element={<Settings />} />
        
        
        <Route path="/payment" element={<Payment />} />
        <Route path="/fault" element={<Fault />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop-home" element={<ShopHome/>}/>
        <Route path="/file-upload" element={<FileUpload/>}/>
        <Route path="/services-prices" element={<ServicePrices/>}/>
        
        
        {/* Dashboard Routes */}
        <Route path="/*" element={<DashboardLayout />} />

        </Route>
      </Routes>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
