import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../../../styles/Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp, BsFillArrowLeftCircleFill } from "react-icons/bs";

const Contact = () => {
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
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className={`${styles.container} ${styles.contact__container}`}>
        <div className={styles.contact__options}>
          <article className={styles.contact__option}>
            {<MdOutlineEmail className={styles.contact__option_icon} />}
            <h4>Email</h4>
            <h5>lionelcastrox@gmail.com</h5>
            <a href="mailto:lionelcastrox@gmail.com" target={"blank"}>
              Send me a message
            </a>
          </article>
          <article className={styles.contact__option}>
            {<BsWhatsapp className={styles.contact__option_icon} />}
            <h4>WhatsApp</h4>
            <h5>+542975070126</h5>
            <a href="https://wa.me/+542975070126" target={"blank"}>
              Send me a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your fullname"
            required
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className={styles.input}
            required
          />
          <textarea
            name="message"
            id=""
            cols={30}
            rows={7}
            placeholder="Your message"
            className={styles.textarea}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
      <a href="#" className={styles.scroll__up}>
        <BsFillArrowLeftCircleFill
          size={"1.5em"}
          className={styles.scroll__up_icon}
        />
        Go Up!
      </a>
    </section>
  );
};

export default Contact;
