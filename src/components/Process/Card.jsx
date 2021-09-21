import React from "react";
import clsx from "clsx";

import styles from "./process.module.scss";

function Card({ title, description, position }) {
  return (
    <div className={clsx(styles.card_wrapper, position === "right" && styles.card_wrapper_right)}>
      <div className={clsx(styles.card, position === "right" && styles.card_right)}>
        <div className={styles.circle}></div>
        <h3 className={styles.card_title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default Card;
