import React from "react";

let name = "Python Swinger";
let name_num = name.length();
let thoughts = "Pretty Cool";

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is ({name})</h1>
        <h2>My name has ({name_num}) letters</h2>
        <h2>I think React ({thoughts})</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
