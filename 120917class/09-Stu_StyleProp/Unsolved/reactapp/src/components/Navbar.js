import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads
const styles = {
  navbar: {
    background: "green",
    height: "50px"

  },
  text: {
  	color: "white",
  	float: "right",
  	background: "none",
  	fontWeight: "bold"
  }
};


const Navbar = () => (
  <nav style={styles.navbar} className="navbar">
    <a href="/" style={styles.text}>Welcome</a>
  </nav>
);

export default Navbar;
