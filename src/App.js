// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomeMenu from "./components/sections/HomeMenu"; 
import Market from "./components/Market/Market";
import FlexibleSave from "./components/Flexible saving/FlexibleSave";
import FlexibleTerm from "./components/Flexible Terms/FlexibleTerm";
import DualInvest from "./components/Dual Invest/DualInvest";
import Exchangepage from "./components/Exchange page/Exchange";
import CardPage from "./components/Card/Card";
import Payments from "./components/payments/Payments";
import PaymentApp from "./components/payments/PaymentApp";
import ForgotPassword from "./components/layout/ForgotPassword";
import VerifyOTP from "./components/layout/VerifyOTP";
import ResetPassword from "./components/layout/ResetPassword";
import Company from "./pages/Company";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogInPage";
import ScrollToTop from "./utils/ScrollToTop";
import Personal from "./components/Personal/Personal";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Layout Routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomeMenu />} /> 
          <Route path="/market" element={<Market />} />
          <Route path="/flexible-saving" element={<FlexibleSave />} />
          <Route path="/flexible-terms" element={<FlexibleTerm />} />
          <Route path="/dual-invest" element={<DualInvest />} />
          <Route path="/exchange" element={<Exchangepage />} />
          <Route path="/personals" element={<Personal />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/payment" element={<Payments />} />
          <Route path="/app_download" element={<PaymentApp />} />
          <Route path="/company" element={<Company />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
