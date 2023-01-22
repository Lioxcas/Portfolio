import React, { useContext, useState } from "react";
import styles from "../../../styles/LangToggle.module.css";
import LangContext from "../context/LangContext";

const LangToggle = () => {
  const context = useContext(LangContext);

  const handleToggle = () => {
    return context.language === "ES"
      ? context.setLanguage("EN")
      : context.setLanguage("ES");
  };

  return (
    <div className={styles.toggle__container}>
      <div
        className={
          context.language === "ES" ? styles.btns_left : styles.btns_right
        }
      ></div>
      <button className={styles.toggle__btn} onClick={handleToggle}>
        ES
      </button>
      <button className={styles.toggle__btn} onClick={handleToggle}>
        EN
      </button>
    </div>
  );
};

export default LangToggle;
