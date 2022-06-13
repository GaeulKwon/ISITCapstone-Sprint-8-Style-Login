import React from "react";
import styles from "../../assets/style_modules/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles["footerContainer"]}>
      <div className={styles["footer"]}>
        <p className={styles["footerText"]}>
          Copyright The Crocodile 2022 <br />
          <br />
          Devon Rice . Dylan York . May Gaeul Kwon . Oscar Cruz . Ryan Luu .
          Victor Matsyshen
        </p>
      </div>
    </div>
  );
}
