import React from "react";
import { Link } from "react-router-dom";

import Container from "../Layout/Container";
import styles from "./hero.module.scss";

import { hero } from "../../eddiepiper.config";

function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.text_wrapper}>
          <h1 className={styles.title}>{hero.title}</h1>
          <span className={styles.description}>{hero.description}</span>
          <span className={styles.tagline}>{hero.tagline}</span>
          <Link className={styles.cta} to="#OmOss">
            {hero.button}
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default Hero;