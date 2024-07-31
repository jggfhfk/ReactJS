import React, { useState } from "react";
import Progressbar from "./Progressbar";

export default function ProgressBarToggler() {

    const [show, setShow] = useState(false)

  return (
    <>
      <button onClick={() => setShow(!show)}>Seee</button>
      {show && <Progressbar />}
    </>
  );
}
