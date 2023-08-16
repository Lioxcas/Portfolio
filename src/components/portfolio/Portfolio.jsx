import React, { useContext } from "react";
import styles from "../../../styles/Portfolio.module.css";
import { SiGithub } from "react-icons/si";
import { TfiWorld } from "react-icons/tfi";
import tmdb from "../../../public/assets/tmdb-sample.jpg";
import divino from "../../../public/assets/divino-sample.jpg";
import appoint from "../../../public/assets/appointments-sample.jpg";
import Image from "next/image";
import en from "../../../public/locale/en";
import es from "../../../public/locale/es";
import LangContext from "../context/LangContext";

const Portfolio = () => {
  const context = useContext(LangContext);
  const l = context.language === "EN" ? en : es;

  const data = [
    {
      id: 1,
      image: tmdb,
      title: "The Movie DB",
      github: "https://github.com/Lioxcas/TMDB-MoviesDB",
      deploy: "https://bespoke-truffle-3baa6f.netlify.app/",
    },
    {
      id: 2,
      image: divino,
      title: "diVino (E-Commerce)",
      github: "https://github.com/Lioxcas/E-COMMERCE-Divino",
    },
    {
      id: 3,
      image: appoint,
      title: "Mi Turno (Appointment App)",
      github: "https://github.com/Lioxcas/webAPP-Reserva-de-turno",
    },
  ];

  return (
    <section id="portfolio">
      <h5>{l.project}</h5>
      <h2>Portfolio</h2>
      <div className={`${styles.container} ${styles.portfolio__container}`}>
        {data.map(({ id, github, title, image, deploy }) => {
          return (
            <article className={styles.portfolio__item} key={id}>
              <Image
                src={image}
                className={styles.portfolio__item_image}
                alt={title}
              />
              <h3>{title}</h3>
              <a href={github}>
                <SiGithub size={"1.5rem"} />
              </a>
              <a href={deploy}>
                <TfiWorld size={"1.5rem"} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
