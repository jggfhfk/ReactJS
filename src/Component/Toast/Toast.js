import React, { useRef, useState } from "react";
import "./Toast.css";

const Toast = () => {
  const [toast, setToast] = useState([]);

  const timeRef = useRef({})

  const handleClose = (idx) => {
    clearTimeout(timeRef.current[idx])
    delete timeRef.current[idx]
    setToast((prev) => {
        const filtered = prev.filter((val) => {
            if(val.length > 0) {
                return val[0].id !== idx
            }
        })
        return filtered})
  }

  const btnHandler = (message, type) => {
    const id = new Date().getTime();

    const newToast = [...toast, [{ id, message, type }]];
    setToast(newToast);
    // console.log(toast[index][0].id)
    timeRef.current[id] = setTimeout(() => handleClose(id), 5000)

  };

  return (
    <div className="toastMain">
      <div className="toastContainer">
        {toast.map((val, index) => {
          return (
            <div key={toast[index][0].id} className={`toast ${toast[index][0].type}`}>
              <div className="toastContent">{toast[index][0].message}</div>
              <span onClick={() => {handleClose(toast[index][0].id)}}>X</span>
            </div>
          );
        })}
      </div>
      <div className="btns">
        <button onClick={() => btnHandler("Success", "success")}>
          Success
        </button>
        <button onClick={() => btnHandler("Alert", "alert")}>Alert</button>
        <button onClick={() => btnHandler("Warning", "warning")}>
          Warning
        </button>
        <button onClick={() => btnHandler("Danger", "danger")}>Danger</button>
      </div>
    </div>
  );
};

export default Toast;
