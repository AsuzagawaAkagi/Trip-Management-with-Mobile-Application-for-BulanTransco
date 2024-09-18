import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import MainPage from './components/MainPage';

const App = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={isAuthenticated ? <MainPage /> : <Navigate to="/main" />} />
      </Routes>
    </Router>
  );
};

export default App;
