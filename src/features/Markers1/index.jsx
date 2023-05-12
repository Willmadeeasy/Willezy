import React from "react";
import "./Markers1.css";

function Markers1(props) {
  const { children, className } = props;
console.log(props);
  return (
    <div className={`markers1 ${className || ""}`}>
      <div className="x01 inter-bold-mine-shaft-16px">
        <span className="span-1 inter-bold-mine-shaft-16px">{children}</span>
      </div>
    </div>
  );
}

export default Markers1;
