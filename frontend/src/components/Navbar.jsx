import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { logo, menu, close } from "../assets";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Projects", path: "/projects" },
  { title: "About", path: "/about" },
  { title: "Post", path: "/Post" },
  { title: "Contact", path: "/feedback" },
];

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const currentLink = navLinks.find((link) => link.path === location.pathname);
    if (currentLink) {
      setActive(currentLink.title);
    }
  }, [location.pathname]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link
          to="/"
          className={styles.brand}
          onClick={() => {
            setActive("Home");
            window.scrollTo(0, 0);
            setMenuOpen(false);
          }}
        >
          <img src={logo} alt="logo" className={styles.logo} />
          <div>
            <p className={styles.brandTitle}>Ritik Yadav</p>
            <span className={styles.brandSubtitle}>Data Science & Full Stack Portfolio</span>
          </div>
        </Link>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <img src={menuOpen ? close : menu} alt="menu" />
        </button>

        <div className={`${styles.headerMenu} ${menuOpen ? styles.showMenu : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.path}
                  className={active === link.title ? styles.activeLink : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
