import React from "react";
import clsx from "clsx";

import styles from "./values.module.scss";

function Card({ img, description, title, position }) {
  return (
    <div className={clsx(styles.card, position === "right" && styles.card_right)}>
      <div className={styles.image}>
        <img className={styles.image} src={img} alt="values image" />
      </div>
      <div className={styles.text_wrapper}>
        <h3 className={styles.card_title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default Card;
