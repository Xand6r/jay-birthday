import React from "react";
import styles from "./private.module.scss";
import Image from "next/image";

export default function index() {
  return (
    <div className={styles.private}>
      <div className={styles.left_section}>
        <div className={styles.left_section_wrapper}>
          <div className={styles.top_meta}>Event Venue</div>
          <div className={styles.title}>
            <section>
              <Image
                src="/images/locationpin.svg"
                alt="locationpin"
                layout="fill"
              />
            </section>
            Slow, Lagos
          </div>
          <div className={styles.subtitle}>
            Indulge in Latin American flavors with a global twist, served in a
            lush and casual yet refined setting. From their hydroponic farms to
            their boundary-pushing cocktails, they&#39;ve crafted an experience
            tailored to thrill. Let their restaurant redefine your celebration
            with opulence and warmth.
          </div>
          <div className={styles.button}>Get Directions</div>
        </div>
      </div>

      <div className={styles.right_section}>
        <Image src="/images/privatee.jpeg" alt="" layout="fill" />
      </div>
    </div>
  );
}
