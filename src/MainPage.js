import React, { useState } from 'react';
import MyChart from './MyChart';
import { useNavigate } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './components/main.css';
import { assignConductorInspector } from './api'; // Import the API function

const localizer = momentLocalizer(moment);

const MainMenu = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedConductor, setSelectedConductor] = useState('');
  const [selectedInspector, setSelectedInspector] = useState('');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleAssignment = async () => {
    try {
      const response = await assignConductorInspector(selectedConductor, selectedInspector);
      console.log(response); // Handle the successful response
      // Optionally, show a success message or update state
      toggleModal(); // Close the modal after assignment
    } catch (error) {
      console.error('Error assigning:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="main-container">
      <header className="header">
        <div className="button-container">
          <button className="assign-button" onClick={toggleModal}>Assign Conductor & Inspector</button>
          <button className="edit-button" disabled>Edit Inspection Points</button>
        </div>
        <div className="profile-container" onClick={() => navigate('/profile')}>
          <img src="/profile.png" alt="Profile" className="profile-pic" />
        </div>
      </header>

      <div className="cards-container">
        <div className="card linechart-card">
          <MyChart />
        </div>
        <div className="card calendar-card">
          <h3>Calendar</h3>
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <Calendar
              localizer={localizer}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 'auto', minHeight: '600px', margin: '20px' }}
              views={['month', 'week', 'day']}
            />
          </div>
        </div>
      </div>

      {/* Modal with fade-in effect */}
      <div className={`modal-overlay ${showModal ? 'show' : ''}`}>
        <div className="modal-content">
          <h3>Assign Conductor & Inspector</h3>
          <select className="dropdown" onChange={(e) => setSelectedConductor(e.target.value)}>
            <option value="">Select Conductor</option>
            <option value="Conductor 1">Conductor 1</option>
            <option value="Conductor 2">Conductor 2</option>
          </select>
          <select className="dropdown" onChange={(e) => setSelectedInspector(e.target.value)}>
            <option value="">Select Inspector</option>
            <option value="Inspector 1">Inspector 1</option>
            <option value="Inspector 2">Inspector 2</option>
          </select>
          <button className="assign-button" onClick={handleAssignment}>Assign</button>
          <button className="close-modal" onClick={toggleModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
