import React, { useEffect } from "react";
import clsx from "clsx";
import gsap from "gsap";

import Container from "../Layout/Container";
import Card from "./Card";
import SectionTitle from "../SectionTitle";
import styles from "./process.module.scss";

import { process } from "../../eddiepiper.config";

function Process() {
  useEffect(() => {
    gsap.to(".circle-1,.circle-2,.circle-3,.circle-4,.circle-5,.circle-6,.circle-7", {
      y: "+=50",
      repeat: -1,
      yoyo: true,
      duration: 20,
    });
  }, []);

  return (
    <section id="Processen" className={styles.process}>
      <div className={styles.bg}>
        <div className={clsx(styles.circle, styles.circle_1, "circle-1")}></div>
        <div className={clsx(styles.circle, styles.circle_2, "circle-2")}></div>
        <div className={clsx(styles.circle, styles.circle_3, "circle-3")}></div>
        <div className={clsx(styles.circle, styles.circle_4, "circle-4")}></div>
        <div className={clsx(styles.circle, styles.circle_5, "circle-5")}></div>
        <div className={clsx(styles.circle, styles.circle_6, "circle-6")}></div>
        <div className={clsx(styles.circle, styles.circle_7, "circle-7")}></div>
      </div>
      <Container className={styles.container}>
        <SectionTitle text={process.title} />

        <div className={styles.image_wrapper__dd}>
          <img src={process.image} alt="double diamond process" />
        </div>

        <p className={styles.dd_description}>{process.description}</p>

        <div className={styles.timeline_wrapper}>
          <div className={styles.center_line}></div>
          {process.process.map((item, i) => (
            <Card
              key={i}
              title={item.title}
              description={item.description}
              position={i % 2 !== 0 ? "right" : "left"}
              image={item.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Process;
