import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-links">
        <Link to="/billing" className="dashboard-link">Billing</Link>
        <Link to="/inventory-check" className="dashboard-link">Inventory Check</Link>
        <Link to="/pos" className="dashboard-link">POS</Link>
      </div>
    </div>
  );
};

export default DashboardPage;
