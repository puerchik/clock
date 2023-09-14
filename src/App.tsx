import React, { useEffect, useState } from 'react';
import './App.css';
import { Clock } from './Components/Clock';
import { StopClock } from './Components/StopClock';

function App() {

  const [toggle, setToggle] = useState(true)

  const changeToggleHandler = () => setToggle(!toggle);

  return (
    <div>
      {toggle
        ? <Clock changeToggle={changeToggleHandler} />
        : <StopClock changeToggle={changeToggleHandler} />}
    </div>
  )

}

export default App;

