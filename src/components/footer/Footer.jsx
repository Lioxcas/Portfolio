import React, { useContext } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import styles from "../../../styles/Footer.module.css";
import en from "../../../public/locale/en";
import es from "../../../public/locale/es";
import LangContext from "../context/LangContext";

const Footer = () => {
  const context = useContext(LangContext);
  const l = context.language === "EN" ? en : es;

  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.footer__logo}>
        Lionel Castro
      </a>
      <ul className={styles.permalinks}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">{l.skills}</a>
        </li>
        <li>
          <a href="#porftolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">{l.contact}</a>
        </li>
      </ul>
      <div className={styles.footer__socials}>
        <a href="https://www.linkedin.com/in/lionel-castro/">
          <BsLinkedin />
        </a>
        <a href="https://www.github.com/lioxcas/">
          <BsGithub />
        </a>
      </div>
      <div className={styles.footer__copyright}>
        <small>&copy; Lionel Castro - Argentina 2023 - </small>
      </div>
    </footer>
  );
};

export default Footer;
