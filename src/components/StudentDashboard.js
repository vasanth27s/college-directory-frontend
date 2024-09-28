import React from 'react';
import './Dashboard.css'; // Import specific dashboard styles

const StudentDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Student Dashboard</h1>
      <p>Welcome to your student dashboard. Manage your profile, view courses, and more.</p>
      <button>Update Profile</button>
    </div>
  );
};

export default StudentDashboard;
