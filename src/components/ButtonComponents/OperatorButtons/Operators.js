import React, {useState} from "react";
import OperatorButton from "./OperatorButton"
import { operators } from "../../../data"

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators)
  return (
    <div className="operators-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operatorState.map((operatorButton, index) => (
         <OperatorButton key={index} button={operatorButton} clickHandler={props.clickHandler}/>
       ))}
    </div>
  );
};

export default Operators;