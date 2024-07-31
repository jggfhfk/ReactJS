import React, { useEffect, useRef, useState } from "react";
import "./ImgSlider.css";
import accordData from "../../Assets/AccorApi";

const ImgSlider = () => {
  const [idx, setIdx] = useState(0);
  let reftimer = useRef(null);

  const handleLeft = () => {
    setIdx((prev) => {
      if (idx > 0) {
        return prev - 1;
      } else {
        setIdx(() => {
          return accordData.length - 1;
        });
      }
    });
  };

  const handleRight = () => {
    setIdx((prev) => {
      if (prev === accordData.length-1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  useEffect(() => {
    reftimer.current = setInterval(handleRight, 2000);
    return () => {
        clearInterval(reftimer.current)
    }
  }, []);

  return (
    <div className="containerSlider">
      <div className="sliderMain" onMouseEnter={() => clearInterval(reftimer.current)} onMouseLeave={() => setInterval(handleRight, 2000)}>
        <div className="leftCtrl" onClick={handleLeft}>
          {"<"}
        </div>
        <div className="imgContainer" >
          {/* <img src="https://unsplash.com/photos/LNRyGwIJr5c" alt="" /> */}
          <div className={`img${idx + 1} img`}>{accordData[idx].question}</div>
        </div>
        <div className="rightCtrl" onClick={handleRight}>
          {">"}
        </div>
      </div>
    </div>
  );
};

export default ImgSlider;
