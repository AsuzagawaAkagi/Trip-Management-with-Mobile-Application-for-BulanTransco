import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login'; // Correct path to Login
import MainMenu from './MainPage'; // Ensure the path and name are correct
import Users from './Users';
import Conductors from './components/conductors'; // Import the Conductors component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/main" element={isAuthenticated ? <MainMenu /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/login" />} />
          {/* Add a route for Conductors */}
          <Route path="/conductors" element={isAuthenticated ? <Conductors /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
      {/* Display Users component */}
      <Users />
    </>
  );
}

export default App;
