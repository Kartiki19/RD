import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import BillingPage from './pages/BillingPage';
import InventoryCheckPage from './pages/InventoryCheckPage';
import POSPage from './pages/POSPage';
import DashboardPage from './pages/DashboardPage';
import './App.css';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" component={<LoginPage />} />
          <Route path="/dashboard" component={<DashboardPage />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/inventory-check" element={<InventoryCheckPage />} />
          <Route path="/pos" element={<POSPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
