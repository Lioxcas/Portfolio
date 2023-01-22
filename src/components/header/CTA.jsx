import React, { useContext } from "react";
import styles from "../../../styles/Header.module.css";
import en from "../../../public/locale/en";
import es from "../../../public/locale/es";
import LangContext from "../context/LangContext";

const CTA = () => {
  const context = useContext(LangContext);
  const l = context.language === "EN" ? en : es;
  return (
    <div className={styles.cta}>
      <a
        href="/CastroResume.pdf"
        alt="alt text"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        {l.cv}
      </a>
      <a href="#contact" className={`${"btn"} ${"btn-primary"}`}>
        {l.talk}
      </a>
    </div>
  );
};

export default CTA;
