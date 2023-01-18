import React from "react";
import styles from "../../../styles/Header.module.css";
/* import CV from "../../../public/Lionel_Castro.pdf"; */

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a href="" download className="btn">
        Download CV
      </a>
      <a href="#contact" className={`${"btn"} ${"btn-primary"}`}>
        Let&apos;s Talk
      </a>
    </div>
  );
};

export default CTA;
