import React, { useState, useEffect } from 'react';

const Conductors = () => {
  const [conductors, setConductors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/conductors')
      .then((response) => response.json())
      .then((data) => setConductors(data))
      .catch((error) => console.error('Error fetching conductors:', error));
  }, []);

  return (
    <div>
      <h1>Conductors</h1>
      {conductors.length === 0 ? (
        <p>No conductors found</p>
      ) : (
        <ul>
          {conductors.map((conductor) => (
            <li key={conductor.id}>{conductor.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Conductors;
