import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setInterval(() => {
      setTime(new Date())
    }, 1000)
  }, [])

  return (
    <div className="App">
      <div className="clockWrapper">
        <span className='time'>{time.toLocaleTimeString()}</span>
      </div>
    </div>
  );
}

export default App;
