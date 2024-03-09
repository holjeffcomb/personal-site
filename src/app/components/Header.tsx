import styles from "../page.module.css";
import Link from "next/link";
import { Gidugu } from "next/font/google";

const gidugu = Gidugu({ subsets: ["latin"], weight: "400" });

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={gidugu.className}>Jeff Holcomb</h1>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}
