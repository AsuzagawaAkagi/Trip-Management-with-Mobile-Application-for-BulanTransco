import React, { useState, useEffect } from 'react';
import './mainStyles.css';

const generateUniqueBusRanges = (count) => {
  const busRanges = new Set();
  while (busRanges.size < count) {
    const start = Math.floor(Math.random() * 12) + 1;
    const end = Math.min(start + Math.floor(Math.random() * (13 - start)), 12);
    const range = `${start}-${end}`;
    busRanges.add(range);
  }
  return Array.from(busRanges);
};

const conductors = ["John Doe", "Jane Smith", "Alice Brown", "Bob White", "Charlie Black", "David Green", "Eve Blue", "Frank Red", "Grace Yellow", "Helen Gray"];
const inspectors = ["Alan Rickman", "Morgan Freeman", "Emma Thompson", "Helen Mirren", "Ian McKellen", "Judi Dench", "Anthony Hopkins", "Tom Hanks", "Viola Davis", "Cate Blanchett"];

const MainPage = () => {
  const [busNumbers, setBusNumbers] = useState([]);
  const [selectedBus, setSelectedBus] = useState('');
  const [selectedConductor, setSelectedConductor] = useState('');
  const [selectedInspector, setSelectedInspector] = useState('');

  // Generate bus numbers only once when the component mounts
  useEffect(() => {
    setBusNumbers(generateUniqueBusRanges(10));
  }, []);

  const handleAssign = () => {
    let missingFields = [];
    
    if (!selectedBus) missingFields.push('Bus Number');
    if (!selectedConductor) missingFields.push('Conductor');
    if (!selectedInspector) missingFields.push('Inspector');
    
    if (missingFields.length > 0) {
      alert(`You forgot to assign ${missingFields.join(', ')}`);
    } else {
      alert(`Assigned ${selectedBus} to Conductor ${selectedConductor} and Inspector ${selectedInspector}`);
    }
  };

  return (
    <div className="main-container">
      <h2>Assign Units</h2>
      <div className="form-group">
        <label>Bus Number:</label>
        <select value={selectedBus} onChange={(e) => setSelectedBus(e.target.value)}>
          <option value="" disabled>Select Bus</option>
          {busNumbers.map((bus, index) => (
            <option key={index} value={bus}>{bus}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Conductor:</label>
        <select value={selectedConductor} onChange={(e) => setSelectedConductor(e.target.value)}>
          <option value="" disabled>Select Conductor</option>
          {conductors.map((conductor, index) => (
            <option key={index} value={conductor}>{conductor}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Inspector:</label>
        <select value={selectedInspector} onChange={(e) => setSelectedInspector(e.target.value)}>
          <option value="" disabled>Select Inspector</option>
          {inspectors.map((inspector, index) => (
            <option key={index} value={inspector}>{inspector}</option>
          ))}
        </select>
      </div>
      <button className="assign-button" onClick={handleAssign}>Assign</button>
    </div>
  );
};

export default MainPage;
