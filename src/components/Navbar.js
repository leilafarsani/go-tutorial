import { Link } from "react-router-dom";
import "../styles/navbar.css";



function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/Go-Logo.jpg" alt="Logo" /> Tutorial
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/tutorial">Tutorial</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


