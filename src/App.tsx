import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const displayFormatting = (num: number) => num < 10 ? "0" + num : num;

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setInterval(() => {
      setTime(new Date())
    }, 1000)
  }, [])

  return (
    <div className="App">
      <div className="clockWrapper">
        <span className='time'>
          {`${displayFormatting(time.getHours())}:${displayFormatting(time.getMinutes())}:${displayFormatting(time.getSeconds())}`}
        </span>
      </div>
    </div>
  );
}

export default App;
