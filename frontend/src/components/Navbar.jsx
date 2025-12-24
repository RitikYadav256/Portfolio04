import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Logo Section */}
        <Link
          to="/"
          className={styles.link}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className={styles.logo} />
          <p className={styles.p1}>My PortFolio</p>
        </Link>

        {/* Menu Button (Toggle) */}
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src={menuOpen ? close : menu} alt="menu" />
        </button>

        {/* Menu Items */}
        <div
          className={`${styles.headerMenu} ${menuOpen ? styles.showMenu : ""}`}
        >
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Post" onClick={() => setMenuOpen(false)}>
                Post
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            {/* New Feedback Link */}
            <li>
             
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
