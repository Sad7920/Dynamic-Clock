import React, { useState } from "react";



function App() {
    const now = new Date().toLocaleTimeString();

    const [time, setTime] = useState(now)

    function refreshTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }
    setInterval(refreshTime,1000)

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={refreshTime}>Get time</button>
    </div>
  );
}

export default App;
