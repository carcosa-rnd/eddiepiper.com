import clsx from "clsx";
import React from "react";

function Layout({ children, className }) {
  return <main className={clsx(className, "main")}>{children}</main>;
}

export default Layout;
