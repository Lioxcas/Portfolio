import Image from "next/image";
import React from "react";
import CTA from "./CTA";
import ME from "../../../public/me.jpg";
import styles from "../../../styles/Header.module.css";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.header__container}`}>
        <h5>Hi, I&apos;m</h5>
        <h1>Lionel</h1>
        <HeaderSocials />
        <h5 className={"text-light"}>Fullstack Developer</h5>
        <CTA />
        <div className={styles.me}>
          <Image src={ME} alt="Lionel Picture" className={styles.pic} />
        </div>
        <a href="#contact" className={styles.scroll__down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
