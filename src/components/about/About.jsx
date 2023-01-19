import Image from "next/image";
import React from "react";
import styles from "../../../styles/About.module.css";
import aboutImg from "../../../public/aboutMe.jpeg";

const About = () => {
  return (
    <section id="about">
      <h5>A little bit</h5>
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
          <p className={styles.text}>
            Hi guys! I&apos;m a web developer, making my way into the IT world
            one line of code at the time.
          </p>
          <p>
            My coding journey began at the beggining of 2022 and what a year it
            has been!
          </p>{" "}
          <p>
            I&apos;ve recently completed a fullstack coding bootcamp at
            Plataforma5 coding school and learnt more about the PERN/MERN stack,
            and it was a great place to practice my soft skills aswell. Working
            with different teams everyday either doing pair programming or with
            aggile methods like SCRUM.{" "}
          </p>{" "}
          <p>
            If you&apos;ve got any questions or just want to talk, don&apos;t
            hessitate to click it and connect!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
