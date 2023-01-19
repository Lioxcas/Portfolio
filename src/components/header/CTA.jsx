import React from "react";
import styles from "../../../styles/Header.module.css";

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a
        href="/CastroResume.pdf"
        alt="alt text"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        Download CV
      </a>
      <a href="#contact" className={`${"btn"} ${"btn-primary"}`}>
        Let&apos;s Talk
      </a>
    </div>
  );
};

export default CTA;
