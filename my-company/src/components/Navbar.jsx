import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <div style={{ color: "white" }}>MyCompany</div>

      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>
        <Link to="/about" style={{ color: "white" }}>
          About
        </Link>
        <Link to="/services" style={{ color: "white" }}>
          Services
        </Link>
        <Link to="/contact" style={{ color: "white" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
