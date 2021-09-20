import React from "react";

import Container from "../Layout/Container";
import Card from "./Card";
import styles from "./values.module.scss";

import { values } from "../../eddiepiper.config";

function Values() {
  return (
    <section className={styles.values}>
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
