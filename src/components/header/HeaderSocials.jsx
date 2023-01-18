import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import styles from "../../../styles/Header.module.css";

const HeaderSocials = () => {
  return (
    <div className={styles.header__socials}>
      <a href="https://www.linkedin.com/in/lionel-castro/" target={"blank"}>
        <BsLinkedin />
      </a>
      <a href="https://github.com/Lioxcas" target={"blank"}>
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
