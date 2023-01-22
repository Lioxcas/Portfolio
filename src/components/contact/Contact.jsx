import React, { useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import styles from "../../../styles/Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp, BsFillArrowLeftCircleFill } from "react-icons/bs";
import en from "../../../public/locale/en";
import es from "../../../public/locale/es";
import LangContext from "../context/LangContext";

const Contact = () => {
  const context = useContext(LangContext);
  const l = context.language === "EN" ? en : es;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_o8fhaee",
      "template_uimo2as",
      form.current,
      "iwG0FSBzbQumwKWVc"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>{l.getIt}</h5>
      <h2>{l.contact}</h2>
      <div className={`${styles.container} ${styles.contact__container}`}>
        <div className={styles.contact__options}>
          <article className={styles.contact__option}>
            {<MdOutlineEmail className={styles.contact__option_icon} />}
            <h4>Email</h4>
            <h5>lionelcastrox@gmail.com</h5>
            <a href="mailto:lionelcastrox@gmail.com" target={"blank"}>
              {l.sendMe}
            </a>
          </article>
          <article className={styles.contact__option}>
            {<BsWhatsapp className={styles.contact__option_icon} />}
            <h4>WhatsApp</h4>
            <h5>+542975070126</h5>
            <a href="https://wa.me/+542975070126" target={"blank"}>
              {l.sendMe}
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder={l.yFullName}
            required
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder={l.yEmail}
            className={styles.input}
            required
          />
          <textarea
            name="message"
            id=""
            cols={30}
            rows={7}
            placeholder={l.yMessage}
            className={styles.textarea}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {l.send}
          </button>
        </form>
      </div>
      <a href="#" className={styles.scroll__up}>
        <BsFillArrowLeftCircleFill
          size={"1.5em"}
          className={styles.scroll__up_icon}
        />
        {l.goUp}
      </a>
    </section>
  );
};

export default Contact;
