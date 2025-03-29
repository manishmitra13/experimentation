import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/');
      const data = await response.json();
      setMessage(data.message);
    };

    fetchData();
  }, []);

  return (
    
      <h1>{message}</h1>
    
  );
}

export default App;
