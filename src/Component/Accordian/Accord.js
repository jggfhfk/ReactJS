import React, { useState } from "react";
import { accordData } from "../../Assets/AccorApi";
import "./Accord.css";
import AccordCard from "./AccordCard";

export default function Accord() {
  const [data, setData] = useState(accordData);
  // console.log(data)

  return (
    <>
      <div className="main">
        <h3>Accordian</h3>
        {data.map((currElem) => {
          return <AccordCard key={currElem.id} {...currElem} />;
        })}
        <button className="toggleSelection">Disable Multi Select</button>
      </div>
    </>
  );
}
