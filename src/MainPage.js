import React from 'react';
import MyChart from './MyChart';
import { useNavigate } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './components/main.css';

const localizer = momentLocalizer(moment);

const MainMenu = () => {
  const navigate = useNavigate();

  
  return (
    <div className="main-container">
      <header className="header">
        <div className="dropdown-container">
          <select className="dropdown">
            <option>Assign Conductor</option>
            <option>Conductor 1</option>
            <option>Conductor 2</option>
          </select>
          <select className="dropdown">
            <option>Assign Inspector</option>
            <option>Inspector 1</option>
            <option>Inspector 2</option>
          </select>
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
             style={{ height: 'auto', minHeight: '600px', margin: '20px' }} // Adjusted minHeight
             views={['month', 'week', 'day']}
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
