import React from "react";

import Container from "../Layout/Container";
import Card from "./Card";
import styles from "./process.module.scss";

import { process } from "../../eddiepiper.config";

function Process() {
  return (
    <section className={styles.process}>
      <Container className={styles.container}>
        <h2 className={styles.title}>{process.title}</h2>
        <p>{process.description}</p>

        <div className={styles.timeline_wrapper}>
          <div className={styles.center_line}></div>
          {process.process.map((item, i) => (
            <Card
              key={i}
              title={item.title}
              description={item.description}
              position={i % 2 !== 0 ? "right" : "left"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Process;
