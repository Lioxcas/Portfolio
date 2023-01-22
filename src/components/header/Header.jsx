import Image from "next/image";
import React, { useContext } from "react";
import CTA from "./CTA";
import ME from "../../../public/me.jpg";
import styles from "../../../styles/Header.module.css";
import HeaderSocials from "./HeaderSocials";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import en from "../../../public/locale/en";
import es from "../../../public/locale/es";
import LangContext from "../context/LangContext";

const Header = () => {
  const context = useContext(LangContext);
  const l = context.language === "EN" ? en : es;

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.header__container}`}>
        <h5>{l.Title}</h5>
        <h1>{l.name}</h1>
        <HeaderSocials />
        <h5 className={"text-light"}>Web Developer</h5>
        <CTA />
        <div className={styles.me}>
          <Image src={ME} alt="Lionel Picture" className={styles.pic} />
        </div>
        <a href="#contact" className={styles.scroll__down}>
          {l.arrowAction}
          <BsFillArrowRightCircleFill
            size={"1.5em"}
            className={styles.scroll__down_icon}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
