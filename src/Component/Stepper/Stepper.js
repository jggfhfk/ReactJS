import React, { useState } from "react";
import "./Stepper.css";
import { computeHeadingLevel } from "@testing-library/react";

const Stepper = () => {
  const steps = [
    {
      label: "Personal Info",
      content: <div>Personal Information Content</div>,
    },
    {
      label: "Account Info",
      content: <div>Account Info Content</div>,
    },
    {
      label: "Payment",
      content: <div>Payment Content</div>,
    },
    {
      label: "Confirmation",
      content: <div>Confirmation Content</div>,
    },
    {
      label: "Review",
      content: <div>Review Content</div>,
    },
  ];

  const [step, setStep] = useState(0);
  const counterPlus = () => {
    if (step < steps.length-1) {
      setStep(step + 1);
    }
  };
  const counterMinus = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="container">
      <div className="mainS">
        {steps.map((val, index) => {
          return (
            <div key={index} className="stepMain">
              <div className={step >= index ? "stepNum active" : "stepNum"}>
                {index + 1}
                {index < steps.length - 1 ? (
                  <div className={step > index ? "vLine active" : "vLine"}></div>
                ) : (
                  <span />
                )}
              </div>
              <div className={step >= index ? "stepVal" : ""}>{val.label}</div>
            </div>
          );
        })}
      </div>
      <div className="content">{steps[step].content}</div>
      <div className="stepperControls">
        <button onClick={counterMinus}>Back</button>
        <button onClick={counterPlus}>Next</button>
      </div>
    </div>
  );
};
export default Stepper;
