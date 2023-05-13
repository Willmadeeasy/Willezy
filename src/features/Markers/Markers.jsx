import React from "react";
import "./Markers.css";

function Markers(props) {
  const { children, className } = props;
  return (
    <div className={`markers1 ${className || ""}`}>
      <div className="x01 inter-bold-mine-shaft-16px">
        <span className="span-1 inter-bold-mine-shaft-16px">{children}</span>
      </div>
    </div>
  );
}

export default Markers;
