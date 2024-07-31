import React, { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [tabnum, setTabNum] = useState(0);
  const clickHandler = (index) => {
    setTabNum(index)
    console.log(index)
  }

  const tabsData = [
    {
      label: "Profile",
      content: <div>Profile Info Content</div>,
    },
    {
      label: "Dashboard",
      content: <div>Dashboard Content</div>,
    },
    {
      label: "Settings",
      content: <div>Settings Content</div>,
    },
    {
      label: "Invoice",
      content: <div>Invoice Content</div>,
    },
  ];

  return (
    <div className="TabsMain">
      <div className="ctrls">
        {tabsData.map((val, index) => {
          return (
            <button key={index} className="btn" onClick={() => clickHandler(index)}>
              {val.label}
            </button>
          );
        })}
      </div>
      <div className="ctn">
        <hr />
        {tabsData[tabnum].content}
      </div>
    </div>
  );
};

export default Tabs;
