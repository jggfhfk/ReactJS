import React, { useState } from "react";
import "./Myfile.css";

const Myfile = ({ folderData }) => {

  const [show, setShow] = useState(false)

  return (
    <div className="fileMain">
      <div className="file" style={{cursor: "pointer"}} onClick={() => setShow(!show)}>
        <span>📁</span>{folderData.name}
      </div>

      {show && folderData?.children?.map((child, index) => {
        return <Myfile key={index} folderData={child}/>
      })}
    </div>
  );
};

export default Myfile;
