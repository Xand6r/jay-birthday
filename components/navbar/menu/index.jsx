import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./menu.module.scss";
import { Logo, CloseIcon } from "./assets";
import { isLoggedIn } from "utils/functions";

export default function Menu({ open, onClose }) {
  const router = useRouter();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState("");

  const scrollToBottom = () => {
    document.querySelector("#footer").scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setIsUserLoggedIn(isLoggedIn());
  }, []);

  return (
    <div className={styles.menu}>
      <div className={styles.top}>
        <div
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
          }}
        >
          <Logo />
        </div>
        <div onClick={onClose}>
          <CloseIcon />
        </div>
      </div>

      <div className={styles.options}>
        <div className={styles.items}>
          <Link href="/event">Event</Link>
        </div>
        <div className={styles.items}>
          <Link href="/#gallery">Gallery</Link>
        </div>
        <div className={styles.items}>
          <Link href="/#sublanding">About</Link>
        </div>
        <div className={styles.items}>
          <div onClick={scrollToBottom}>Contact</div>
        </div>
      </div>

      <div onClick={scrollToBottom} className={styles.reservation_button}>
        {isUserLoggedIn ? "RSVP" : "Login"}
      </div>
    </div>
  );
}
