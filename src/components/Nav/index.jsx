import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import clsx from "clsx";

import Container from "../Layout/Container";
import { MenuButton } from "../../utils/svg";
import styles from "./nav.module.scss";
import { nav } from "../../eddiepiper.config";

import logo from "../../assets/images/logo.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 } });

    if (isOpen) {
      return tl.to(".nav_links_wrapper", {
        display: "flex",
        opacity: 1,
      });
    }

    return tl.to(".nav_links_wrapper", { opacity: 0 }).to(".nav_links_wrapper", {
      display: "none",
      delay: 0.1,
    });
  }, [isOpen]);

  return (
    <nav className={styles.nav}>
      <Container className={styles.container}>
        <div className={styles.logo_wrapper}>
          <span className={styles.logo}>
            <Link to="/"></Link>
            <img src={logo} alt="Eddie Piper" />
          </span>

          <div>
            <button
              onClick={toggleNav}
              className={styles.menu_button}
              type="button"
              aria-label="toggle menu"
            >
              <MenuButton />
            </button>
          </div>
        </div>

        <div className={clsx(styles.nav_links_wrapper, "nav_links_wrapper")}>
          {nav.links.map((link, i) => (
            <Link to={`#${link}`} className={styles.nav_link} key={i}>
              {link}
            </Link>
          ))}
        </div>
      </Container>
    </nav>
  );
}

export default Nav;
