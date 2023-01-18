import Image from "next/image";
import React from "react";
import styles from "../../../styles/Skills.module.css";
import { AiTwotoneStar } from "react-icons/ai";

const Skills = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>Skills</h2>
      <div className={`${styles.container} ${styles.experience__container}`}>
        <div className={styles.experience__frontend}>
          <h3>Frontend Development</h3>
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
          <h3>Backend Development</h3>
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
