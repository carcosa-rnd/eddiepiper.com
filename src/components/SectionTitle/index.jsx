import React from "react";
import clsx from "clsx";

import styles from "./section_title.module.scss";

function SectionTitle({ text, className }) {
  return <h2 className={clsx(styles.title, className && className)}>{text}</h2>;
}

export default SectionTitle;
