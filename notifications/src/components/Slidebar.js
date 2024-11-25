import React, { useState } from "react";
import "./Slidebar.css";

const Slidebar = () => {
  const [isDashboardOpen, setDashboardOpen] = useState(false);
  const [isProgressOpen, setProgressOpen] = useState(false);

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>

      {/* Dashboard Dropdown */}
      <div className="sidebar-item" onClick={() => setDashboardOpen(!isDashboardOpen)}>
        <span>Dashboard</span>
      </div>
      {isDashboardOpen && (
        <div className="dropdown">
          <div className="dropdown-item">Analytics</div>
          <div className="dropdown-item">Social</div>
          <div className="dropdown-item">Default</div>
        </div>
      )}

      {/* Progress Dropdown */}
      <div className="sidebar-item" onClick={() => setProgressOpen(!isProgressOpen)}>
        <span>Progress</span>
      </div>
      {isProgressOpen && (
        <div className="dropdown">
          <div className="dropdown-item">Report</div>
          <div className="dropdown-item">Tools</div>
        </div>
      )}
      <div className="sidebar-item">
        <span>Autherization</span>
      </div>

      {/* Logout Button */}
      <div className="logout-button">
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Slidebar;
