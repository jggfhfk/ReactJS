import React, { useEffect, useState } from "react";
import "./Progress.css";

export default function Progressbar() {
  const [bar, setbar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setbar((prevBar) => {
        if (prevBar >= 100) {
          clearInterval(interval);
        }
        return Math.min(prevBar + 5, 100);
      });
      return () => {
        clearInterval(interval);
      };
    }, 150);
    
  }, []);

  return (
    <div className="container">
      <div style={{ left: `${bar - 100}%` }} className="progress"></div>
    </div>
  );
}
