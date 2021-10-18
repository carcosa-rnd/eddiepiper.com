import React from "react";

import Container from "../Layout/Container";
import Card from "./Card";
import SectionTitle from "../SectionTitle";
import styles from "./about.module.scss";

import { about } from "../../eddiepiper.config";

function About() {
  return (
    <section id="Om Oss" className={styles.about}>
      <Container className={styles.container}>
        <div className={styles.image_wrapper}>
          {about.images.map((person, i) => (
            <Card key={i} title={person.name} subtitle={person.description} image={person.image} />
          ))}
        </div>

        <div className={styles.text_wrapper}>
          <SectionTitle text={about.title} />
          <p className={styles.description}>{about.description}</p>
          <a className={styles.cta} href="#Kontakt">
            {about.button}
          </a>
        </div>
      </Container>
    </section>
  );
}

export default About;
