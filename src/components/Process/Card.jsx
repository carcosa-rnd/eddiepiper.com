import React, { useState } from "react";
import clsx from "clsx";

import styles from "./process.module.scss";

function Card({ title, description, position, image }) {
  const [preview, setPreview] = useState("");

  const previewImage = () => {
    setPreview(image);
  };

  return (
    <>
      <div className={clsx(styles.card_wrapper, position === "right" && styles.card_wrapper_right)}>
        <div
          onClick={previewImage}
          className={clsx(styles.card, position === "right" && styles.card_right)}
        >
          <div className={styles.circle}></div>
          <h3 className={styles.card_title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      {preview && (
        <div onClick={() => setPreview(null)} className={styles.image_wrapper}>
          <img className={styles.image} src={preview} />
        </div>
      )}
    </>
  );
}

export default Card;
