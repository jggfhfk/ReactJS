import React, { useEffect, useRef, useState } from "react";
import "./Timer.css";

export default function Timer() {
  const [time, settime] = useState({
    hour: "",
    min: "",
    sec: "",
  });

  const [isRunning, setisRunning] = useState(false);
  const intervalRef = useRef(null)

  const changeHandler = (e, field) => {
    const value = parseInt(e.target.value, 10) || 0;
    console.log(e.target.value, field);
    const copyTime = { ...time };

    copyTime[field] = value;
    copyTime.min += Math.floor(copyTime.sec / 60);
    copyTime.sec = copyTime.sec % 60;
    copyTime.hour += Math.floor(copyTime.min / 60);
    copyTime.min = copyTime.min % 60;

    settime(copyTime);
  };

  const handleStart = () => {
    setisRunning(!isRunning)
    console.log(isRunning)
  }

  const handleReset = () => {
    settime({hour: "", min: "", sec: ""})
  }

  useEffect(() => {
    // console.log(time);
    if (isRunning) {
      if (
        time.hour.length == 0 &&
        time.min.length == 0 &&
        time.sec.length == 0
      ) {
        return;
      }
      intervalRef.current = setInterval(() => {
        settime((prevTime) => {
          const copyPrevTime = { ...prevTime };
          copyPrevTime.sec--;
          if (copyPrevTime.sec < 0) {
            copyPrevTime.min--;
            copyPrevTime.sec = 59;
            if (copyPrevTime.min < 0) {
              copyPrevTime.hour--;
              copyPrevTime.min = 59;
              if (copyPrevTime.hour < 0) {
                clearInterval(intervalRef.current);
                return { hour: "", min: "", sec: "" };
              }
            }
          }
          return copyPrevTime;
        });
      }, 1000);
    }

    return () => {
        clearInterval(intervalRef.current)
    };
  }, [isRunning]);

  return (
    <>
      <div className="main">
        <div className="clock">
          <input
            type="text"
            placeholder="HH"
            value={time.hour}
            onChange={(e) => changeHandler(e, "hour")}
          />
          :
          <input
            type="text"
            placeholder="MM"
            value={time.min}
            onChange={(e) => changeHandler(e, "min")}
          />
          :
          <input
            type="text"
            placeholder="SS"
            value={time.sec}
            onChange={(e) => changeHandler(e, "sec")}
          />
        </div>
        <div className="ctrls">
          <button onClick={handleStart}>
            {isRunning ? "Pause" : "Start"}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
}
