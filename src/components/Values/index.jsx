import React, { useEffect } from "react";
import clsx from "clsx";
import gsap from "gsap";

import Container from "../Layout/Container";
import Card from "./Card";
import SectionTitle from "../SectionTitle";
import styles from "./values.module.scss";

import { values } from "../../eddiepiper.config";

function Values() {
  useEffect(() => {
    gsap.to(".circle-1,.circle-2,.circle-3,.circle-4,.circle-5,.circle-6,.circle-7", {
      y: "+=50",
      repeat: -1,
      yoyo: true,
      duration: 20,
    });
  }, []);

  return (
    <section id="Värden" className={styles.values}>
      <div className={styles.bg}>
        <div className={clsx(styles.circle, styles.circle_1, "circle-1")}></div>
        <div className={clsx(styles.circle, styles.circle_2, "circle-2")}></div>
        <div className={clsx(styles.circle, styles.circle_3, "circle-3")}></div>
        <div className={clsx(styles.circle, styles.circle_4, "circle-4")}></div>
        <div className={clsx(styles.circle, styles.circle_5, "circle-5")}></div>
        <div className={clsx(styles.circle, styles.circle_6, "circle-6")}></div>
      </div>
      <Container className={styles.container}>
        <SectionTitle className={styles.title} text={values.title} />

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
