import React from "react";
import Sham from "./Sham";

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360


let prop1 =  {num1: 19, operator: '+', num2: 341};
let prop2 =  {num1: 42, operator: '-', num2: 17};
let prop3 =  {num1: 100, operator: '*', num2: 3};
let prop4 =  {num1: 96, operator: '/', num2: 4};

const Calculator = () => (
  <div>
    
      <Sham data={prop1}/>
    
    
      <Sham data={prop2}/>
    
    
      <Sham data={prop3}/>
    
      <Sham data={prop4}/>
    
  </div>
);

export default Calculator;
