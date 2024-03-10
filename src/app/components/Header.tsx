"use client";

import styles from "../page.module.css";
import Link from "next/link";
import { Gidugu } from "next/font/google";
import { useState } from "react";

const gidugu = Gidugu({ subsets: ["latin"], weight: "400" });

export default function Header() {
  const [isHamburger, setIsHamburger] = useState<Boolean>(false);

  const toggleHamburger = () => {
    setIsHamburger(!isHamburger);
  };

  return (
    <header className={styles.header}>
      <h1 className={gidugu.className}>Jeff Holcomb</h1>
      <ul
        className={`${styles.navLinks} ${isHamburger ? styles.navActive : ""}`}
      >
        <li>
          <Link className={styles.link} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/work">
            Work
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <button className={styles.hamburger} onClick={toggleHamburger}>
        <span className={styles.hamSpan}></span>
        <span className={styles.hamSpan}></span>
        <span className={styles.hamSpan}></span>
      </button>
    </header>
  );
}
