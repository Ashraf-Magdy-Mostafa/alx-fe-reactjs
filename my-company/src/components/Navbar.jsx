import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "10px", background: "#0f172a" }}>
    <Link to="/" style={{ color: "#fff", marginRight: "10px" }}>Home</Link>
    <Link to="/about" style={{ color: "#fff", marginRight: "10px" }}>About</Link>
    <Link to="/services" style={{ color: "#fff", marginRight: "10px" }}>Services</Link>
    <Link to="/contact" style={{ color: "#fff" }}>Contact</Link>
  </nav>
);

export default Navbar;