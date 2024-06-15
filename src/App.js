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



//import { Navbar } from "react-bootstrap";


/*function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
 

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faultsuggest" element={<FaultSuggest />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/account-setting" element={<Settings />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpw" element={<ForgotPw />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/fault" element={<Fault />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/shops" element={<Shops />} />
            <Route path="/login" element={<Login />} />
            <Route path="/faultsuggest" element={<FaultSuggest />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/account-setting" element={<Settings />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpw" element={<ForgotPw />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/fault" element={<Fault />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>

        <Footer />
      </Router>
      <div>
      <Router>
      
      
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="app-content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/manageReservations" element={<ManageReservations />} />
              <Route path="/history" element={<ReservationHistory />} />
              <Route path="/payment-reservations" element={<PaymentReservations />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/chatbot" element={<Chatbot/>}/>
            </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
      
      </Router>
      </div>
    </Provider>
  );
}


export default App;*/

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faultsuggest" element={<FaultSuggest />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account-setting" element={<Settings />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpw" element={<ForgotPw />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/fault" element={<Fault />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop-home" element={<ShopHome/>}/>
        <Route path="/file-upload" element={<FileUpload/>}/>
        
        {/* Dashboard Routes */}
        <Route path="/*" element={<DashboardLayout />} />
      </Routes>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
