import React, { useState } from "react";

let timeout;

// move bootstrap
// supprimer fichiers inutiles
// mettre en ligne

const onInitialTimeChange = (initialTime, setInitialTime, setTime, time) => () => {
  const tmpTime = initialTime + time;
  const newTime = tmpTime > 0 ? tmpTime : 0;
  setInitialTime(newTime);
  setTime(newTime);
};


const onPlayStop = (isPlaying, setIsPlaying) => () => {
  setIsPlaying(!isPlaying);
};

const onReset = (initialTime, setTime) => () => {
  clearTimeout(timeout);
  setTime(initialTime);
};

const getMinutes = (time) => {
  return Math.floor(time / 60000);
}

const getSeconds = (time) => {
  return Math.floor((time % 60000) / 1000);
}

const App = () => {
  const [initialTime, setInitialTime] = useState(0);
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(null);

  React.useEffect(() => {
    if(time === 0 && isPlaying === true) {
      if(window.confirm("Restart")) {
        setTime(initialTime);
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }

    }
  }, [time, isPlaying, initialTime]);

  React.useEffect(() => {
    if (isPlaying === true) {
      timeout = setTimeout(() => {
        if(time - 1000 >= 0) {
          setTime(time - 1000);
        }
      }, 1000);
    }
  }, [isPlaying, time]);

  return (
    <div className="App">
      <p>{getMinutes(time)}:{getSeconds(time)} left before the break</p>
      <button disabled={isPlaying} onClick={onInitialTimeChange(initialTime, setInitialTime, setTime, 60000)}>{"+"}</button>
      <button disabled={isPlaying || !time} onClick={onInitialTimeChange(initialTime, setInitialTime, setTime, -60000)}>{"-"}</button>
      <button disabled={!time} onClick={onPlayStop(isPlaying, setIsPlaying)}>{!isPlaying ? "Play" : "Stop"}</button>
      <button onClick={onReset(initialTime, setTime)}>{"Reset"}</button>
    </div>
  );
  
}

export default App;
