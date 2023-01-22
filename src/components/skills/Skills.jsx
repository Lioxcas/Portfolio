import Image from "next/image";
import React, { useContext } from "react";
import styles from "../../../styles/Skills.module.css";
import { AiTwotoneStar } from "react-icons/ai";
import en from "../../../public/locale/en";
import es from "../../../public/locale/es";
import LangContext from "../context/LangContext";

const Skills = () => {
  const context = useContext(LangContext);
  const l = context.language === "EN" ? en : es;

  return (
    <section id="experience">
      <h5>{l.whatSkills}</h5>
      <h2>{l.skills}</h2>
      <div className={`${styles.container} ${styles.experience__container}`}>
        <div className={styles.experience__frontend}>
          <h3>{l.frontDev}</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <AiTwotoneStar className={styles.experience__details_icon} />
              <h4>HTML</h4>
            </article>
            <article className={styles.experience__details}>
              <AiTwotoneStar className={styles.experience__details_icon} />
              <h4>CSS</h4>
            </article>
            <article className={styles.experience__details}>
              <AiTwotoneStar className={styles.experience__details_icon} />
              <h4>JavaScript</h4>
            </article>
            <article className={styles.experience__details}>
              <AiTwotoneStar className={styles.experience__details_icon} />
              <h4>React</h4>
            </article>
            <article className={styles.experience__details}>
              <AiTwotoneStar className={styles.experience__details_icon} />
              <h4>NextJs</h4>
            </article>
            <article className={styles.experience__details}>
              <AiTwotoneStar className={styles.experience__details_icon} />
              <h4>SASS</h4>
            </article>
          </div>
        </div>
        <div className={styles.experience__backend}>
          <h3>{l.backDev}</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <AiTwotoneStar className={styles.experience__details_icon} />
              <h4>Node JS</h4>
            </article>
            <article className={styles.experience__details}>
              <AiTwotoneStar className={styles.experience__details_icon} />
              <h4>Express</h4>
            </article>
            <article className={styles.experience__details}>
              <AiTwotoneStar className={styles.experience__details_icon} />
              <h4>PostgreSQL</h4>
            </article>
            <article className={styles.experience__details}>
              <AiTwotoneStar className={styles.experience__details_icon} />
              <h4>Sequelize</h4>
            </article>
            <article className={styles.experience__details}>
              <AiTwotoneStar className={styles.experience__details_icon} />
              <h4>MongoDB</h4>
            </article>
            <article className={styles.experience__details}>
              <AiTwotoneStar className={styles.experience__details_icon} />
              <h4>Mongoose</h4>
            </article>
            <article className={styles.experience__details}>
              <AiTwotoneStar className={styles.experience__details_icon} />
              <h4>Postman</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
