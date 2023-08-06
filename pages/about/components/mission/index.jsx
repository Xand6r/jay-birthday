import React from "react";
import Image from "next/image";
import styles from "./mission.module.scss";

export default function Index() {
  return (
    <section className={styles.mission}>
      <div className={styles.statement}>
        <div>Dress Code</div>
        <div>
          All-White Elegance: Unveiling the Timeless Appeal of White Attire
        </div>
      </div>

      <div className={styles.image_container}>
        <Image alt="mission" src="/images/table.jpg" layout="fill" />
      </div>
    </section>
  );
}
