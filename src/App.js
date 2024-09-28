import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import FacultyDashboard from './components/FacultyDashboard';
import AdminDashboard from './components/AdminDashboard';
import StudentPage from './pages/StudentPage';
import FacultyPage from './pages/FacultyPage';
import AdminPage from './pages/AdminPage';

import './App.css'; // Importing styles

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Default route to login */}
          <Route path="/" element={<Login />} />

          {/* Route for student-specific pages */}
          <Route path="/student" element={<StudentDashboard />}>
            <Route path="profile" element={<StudentPage />} />
          </Route>

          {/* Route for faculty-specific pages */}
          <Route path="/faculty" element={<FacultyDashboard />}>
            <Route path="profile" element={<FacultyPage />} />
          </Route>

          {/* Route for administrator-specific pages */}
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="profile" element={<AdminPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
