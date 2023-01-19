import React from "react";
import styles from "../../../styles/Portfolio.module.css";
import { SiGithub } from "react-icons/si";
import tmdb from "../../../public/assets/tmdb-sample.jpg";
import divino from "../../../public/assets/divino-sample.jpg";
import appoint from "../../../public/assets/appointments-sample.jpg";
import Image from "next/image";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: tmdb,
      title: "The Movie DB",
      github: "https://github.com/Lioxcas",
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
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className={`${styles.container} ${styles.portfolio__container}`}>
        {data.map(({ id, github, title, image }) => {
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
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
