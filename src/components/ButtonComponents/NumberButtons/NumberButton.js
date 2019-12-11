import React, {useState} from "react";

const NumberButton = (props) => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="numbersButton">
        {props.button}
      </button> 
    </div>
  );
};

export default NumberButton;