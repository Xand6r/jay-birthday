import React from "react";
import Image from "next/image";
import styles from "./sublanding.module.scss";

export default function index() {
  return (
    <div id="sublanding" className={styles.sublanding}>
      <section className={styles.left_section}>
        <div className={styles.heading}>
          Come Celebrate... <br /> and be merry
        </div>
      </section>
      <section className={styles.right_section}>
        <div className={styles.text_content}>
        
          Embrace Pure Elegance: A White Brunch Celebration for Jacinta&apos;s 27th
          Birthday! Join us in celebrating Jacinta&apos;s special day with a refined
          all-white brunch affair, where sophistication takes center stage. Let
          her revel in the spotlight while indulging in a luxury lounging
          experience. Tailored exclusively for Jacinta, this celebration
          promises unforgettable moments of joy, laughter, and cherished
          memories that she&apos;ll hold dear forever.
        </div>

        <div className={styles.reservation_button}>RSVP</div>

        <div className={styles.image_container}>
          <Image
            src="/images/taglineimage2.png"
            alt="taglineimage"
            layout="fill"
          />
        </div>
      </section>
    </div>
  );
}
