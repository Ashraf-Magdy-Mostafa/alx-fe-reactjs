import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0f172a",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "#ffffff", margin: 0 }}>MyCompany</h2>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link style={{ color: "#ffffff", textDecoration: "none" }} to="/">
          Home
        </Link>
        <Link style={{ color: "#ffffff", textDecoration: "none" }} to="/about">
          About
        </Link>
        <Link
          style={{ color: "#ffffff", textDecoration: "none" }}
          to="/services"
        >
          Services
        </Link>
        <Link
          style={{ color: "#ffffff", textDecoration: "none" }}
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
