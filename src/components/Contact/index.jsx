import React from "react";

import Container from "../Layout/Container";
import styles from "./contact.module.scss";

import { contact } from "../../eddiepiper.config";

function Contact() {
  return (
    <section className={styles.contact}>
      <Container className={styles.container}>
        <div className={styles.bg}></div>
        <div className={styles.text_wrapper}>
          <h2 className={styles.description}>{contact.description}</h2>
          <a className={styles.cta} href="mailto:hello@eddiepiper.com">
            {contact.button}
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
