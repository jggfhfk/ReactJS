import React, { useCallback, useState } from "react";
import "./Rating.css";

export default function Rating({ count = 10 }) {
  const [StarValue, setStarValue] = useState();
  const [hoverValue, setHoverValue] = useState()
  console.log(StarValue);
  return (
    <div>
      {new Array(count).fill(0).map((value, index) => {
        return (
          <span
            key={index}
            className={index < StarValue && "clr" || index < hoverValue && "clr" }
            onClick={() => setStarValue(index + 1)}
            onMouseEnter={() => setHoverValue(index + 1)}
            onMouseLeave={() => setHoverValue(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}
