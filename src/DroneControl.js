import React from 'react';
import axios from 'axios'; // Make sure to npm install axios

export default function DroneControl() {
  const startFlight = () => {
    // Example endpoint
    axios.post('http://yourbackend.com/api/start-flight')
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <button onClick={startFlight}>Start Drone Flight</button>
    </div>
  );
}
