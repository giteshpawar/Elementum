import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <h2 className="logo">Elementum</h2>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <a href="#home">Home</a>
        <a href="#studio">Studio</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="#faq">FAQs</a>
      </nav>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;