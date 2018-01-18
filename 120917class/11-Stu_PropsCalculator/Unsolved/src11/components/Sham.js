import React from "react";

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
const Sham = (props) => {

  // props= JSON.parse(props);
  let value = null;

  switch (props.data.operator) {
      case "+":
        return (
          <div>
            {props.data.num1} {props.data.operator} {props.data.num2} = {parseFloat(props.data.num1) + parseFloat(props.data.num2)}
          </div>
          );
        break;
      case "-":
        return (
          <div>
            {props.data.num1} {props.data.operator} {props.data.num2} = {parseFloat(props.data.num1) - parseFloat(props.data.num2)}
          </div>
          );
        break;
      case "*":
        return (
          <div>
            {props.data.num1} {props.data.operator} {props.data.num2} = {parseFloat(props.data.num1) * parseFloat(props.data.num2)}
          </div>
          );
        break;
      case "/":
        return (
          <div>
            {props.data.num1} {props.data.operator} {props.data.num2} = {parseFloat(props.data.num1) / parseFloat(props.data.num2)}
          </div>
          );
        break;
        default:
          return (
              <div> NaN</div>
            )   
  }
};

export default Sham;
