import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import clsx from "clsx";

import Container from "../Layout/Container";
import { MenuButton } from "../../utils/svg";
import styles from "./nav.module.scss";
import { nav } from "../../eddiepiper.config";

import logo from "../../assets/images/logo.png";

function Nav({ currentSection }) {
  const [menuTl] = useState(gsap.timeline({ paused: true, defaults: { duration: 0.3 } }));

  const toggleNav = () => menuTl.reversed(!menuTl.reversed());

  useEffect(() => {
    menuTl
      .to(".nav_links_wrapper", {
        visibility: "visible",
        autoAlpha: 1,
        backgroundColor: "rgba(0,0,0,0.8)",
      })
      .to(
        ".nav",
        {
          backgroundColor: "rgba(0,0,0,0.8)",
        },
        "-=0.3"
      )
      .reverse();
  }, []);

  return (
    <nav className={clsx(styles.nav, "nav")}>
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
            <a
              href={`#${link}`}
              className={clsx(styles.nav_link, currentSection === link ? styles.active : "")}
              key={i}
            >
              {link}
            </a>
          ))}
        </div>
      </Container>
    </nav>
  );
}

export default Nav;
