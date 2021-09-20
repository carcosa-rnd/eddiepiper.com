import React from "react";
import clsx from "clsx";

import Container from "../Layout/Container";
import Card from "./Card";
import styles from "./values.module.scss";

import { values } from "../../eddiepiper.config";

function Values() {
  return (
    <section id="Värden" className={styles.values}>
      <div className={styles.bg}>
        <div className={clsx(styles.circle, styles.circle_1)}></div>
        <div className={clsx(styles.circle, styles.circle_2)}></div>
        <div className={clsx(styles.circle, styles.circle_3)}></div>
        <div className={clsx(styles.circle, styles.circle_4)}></div>
        <div className={clsx(styles.circle, styles.circle_5)}></div>
        <div className={clsx(styles.circle, styles.circle_6)}></div>
      </div>
      <Container className={styles.container}>
        <h2 className={styles.title}>{values.title}</h2>
        <div className={styles.cards_wrapper}>
          {values.values.map((value, i) => (
            <Card
              key={i}
              title={value.title}
              description={value.description}
              img={value.image}
              position={i % 2 !== 0 ? "right" : "left"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Values;
