import Image from "next/image";
import React, { useContext } from "react";
import styles from "../../../styles/About.module.css";
import aboutImg from "../../../public/aboutMe.jpeg";
import en from "../../../public/locale/en";
import LangContext from "../context/LangContext";
import es from "../../../public/locale/es";

const About = () => {
  const context = useContext(LangContext);
  const l = context.language === "EN" ? en : es;

  return (
    <section id="about">
      <h5>{l.aLittle}</h5>
      <h2>About Me</h2>
      <div className={`${styles.container} ${styles.about__container}`}>
        <div className={styles.about__me}>
          <div className={styles.about__me_image}>
            <Image
              src={aboutImg}
              alt="landscape"
              className={styles.about__pic}
            />
          </div>
        </div>
        <div className={styles.about__content}>
          <p className={styles.text}>{l.aboutP1}</p>
          <p>{l.aboutP2}</p> <p>{l.aboutP3}</p> <p>{l.aboutP4}</p>
          <a href="#contact" className="btn btn-primary">
            {l.talk}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
