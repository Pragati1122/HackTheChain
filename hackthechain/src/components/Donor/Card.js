import styles from "./Card.module.css";
import React from "react";

export default function Card() {
  return (
    <>
      <div className={styles.card}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <div className={styles.container}>
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
        <div className={styles.button3}>
          <button>Submit Request</button>
        </div>
      </div>
    </>
  );
}
