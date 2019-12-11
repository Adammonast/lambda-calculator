import React, {useState} from "react";

const Display = ({displayText}) => {
  const [displayState] = useState(displayText)
  return <div className="display">{displayState}</div>;
};


export default Display
