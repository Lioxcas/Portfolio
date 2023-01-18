import React, { useState } from "react";
import { BiHome, BiMailSend, BiGlasses } from "react-icons/bi";
import { BsBook } from "react-icons/bs";
import { RiSuitcaseLine } from "react-icons/ri";
import styles from "../../../styles/Navbar.module.css";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className={styles.nav}>
      <a href="#" className={activeNav === "#" ? `${styles.active}` : ""}>
        <BiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("about")}
        className={activeNav === "about" ? `${styles.active}` : ""}
      >
        <BsBook />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("experience")}
        className={activeNav === "experience" ? `${styles.active}` : ""}
      >
        <BiGlasses />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("portfolio")}
        className={activeNav === "portfolio" ? `${styles.active}` : ""}
      >
        <RiSuitcaseLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("contact")}
        className={activeNav === "contact" ? `${styles.active}` : ""}
      >
        <BiMailSend />
      </a>
    </nav>
  );
};
export default Navbar;
