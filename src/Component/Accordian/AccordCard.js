import React, { useState } from "react";
import "./Accord.css";

export default function AccordCard({id, question, answer}) {

    const [show, setShow] = useState(false)

  return (
    <>
      <div className="cardMain">
        <div className="head">
          <p className="question">
            Id reprehenderit in non qui cupidatat in elit eu excepteur.
          </p>
          <p className="trigger" onClick={() => setShow(!show)}>{show ? "➖" : "➕"}</p>
        </div>
        <div className="answer">
         {show && <p>{answer}</p>}
        </div>
      </div>
    </>
  );
}
