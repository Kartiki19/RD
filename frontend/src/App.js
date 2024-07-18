import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BillingPage from './pages/BillingPage';
import InventoryCheckPage from './pages/InventoryCheckPage';
import POSPage from './pages/POSPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/inventory-check" element={<InventoryCheckPage />} />
          <Route path="/pos" element={<POSPage />} />
          <Route path="/" element={<BillingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
