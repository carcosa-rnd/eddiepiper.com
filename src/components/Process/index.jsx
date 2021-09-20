import React from "react";
import clsx from "clsx";

import Container from "../Layout/Container";
import Card from "./Card";
import styles from "./process.module.scss";

import { process } from "../../eddiepiper.config";

function Process() {
  return (
    <section id="Processen" className={styles.process}>
      <div className={styles.bg}>
        <div className={clsx(styles.circle, styles.circle_1)}></div>
        <div className={clsx(styles.circle, styles.circle_2)}></div>
        <div className={clsx(styles.circle, styles.circle_3)}></div>
        <div className={clsx(styles.circle, styles.circle_4)}></div>
        <div className={clsx(styles.circle, styles.circle_5)}></div>
        <div className={clsx(styles.circle, styles.circle_6)}></div>
        <div className={clsx(styles.circle, styles.circle_7)}></div>
      </div>
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
