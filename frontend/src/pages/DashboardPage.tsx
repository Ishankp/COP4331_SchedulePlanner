import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false); // Track dropdown visibility

  // Retrieve user data from localStorage
  const userData = JSON.parse(localStorage.getItem('user_data') || '{}');
  const firstInitial = userData?.firstName ? userData.firstName.charAt(0).toUpperCase() : 'P';

  // Toggle dropdown visibility
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('user_data'); // Clear user data from localStorage
    navigate('/'); // Redirect to login page
  };

  return (
    <div>
      <div className="navbar">
        <h2 className="site-title">TimeLink</h2>
        <div className="auth-buttons">
          <button className="profile-button" onClick={toggleDropdown}>
            {firstInitial}
          </button>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>

      <div className="schedule-content">
        <h1 className="page-title">Dashboard</h1>
      </div>
      <div className="schedule-builder"></div>

    </div>
  );
};

export default DashboardPage;
