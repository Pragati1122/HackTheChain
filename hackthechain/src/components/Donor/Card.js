import styles from "./Card.module.css";
import React, { Image } from "react";
import pic from "./pic.png";

export default function Card() {
  return (
    <>
      <div className={styles.card}>
        <img src={pic} alt="Avatar" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <div className={styles.container}>
          <h4>
            <b>John Doe</b>
          </h4>
        </div>
        <div className={styles.button3}>
          <button>Download Prescription</button>
        </div>
        <div className={styles.button3}>
          <button>Donate</button>
        </div>
      </div>
    </>
  );
}
