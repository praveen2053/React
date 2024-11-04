import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard'
import ApiFetchAll from './Pages/ApiFetchAll';
import ProductDetails from './Pages/ProductDetails';
import NoDataFound from './Pages/NoDataFound';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path = "/apifetchall" element = {<ApiFetchAll />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NoDataFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
