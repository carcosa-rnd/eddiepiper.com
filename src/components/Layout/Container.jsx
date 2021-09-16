import clsx from "clsx";
import React from "react";

import styles from "./layout.module.scss";

function Container({ className, children }) {
  return <div className={clsx(styles.container, className)}>{children}</div>;
}

export default Container;
