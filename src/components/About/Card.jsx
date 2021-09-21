import React from "react";

import styles from "./about.module.scss";

function Card({ image, title, subtitle }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} />
      <span className={styles.title}>{title}</span>
      <span className={styles.subtitle}>{subtitle}</span>
    </div>
  );
}

export default Card;
