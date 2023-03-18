import React from "react";
import Navbars from "../Navbar/Navbars";
import styles from "./Receiver.module.css";
import { Input, Button } from "react";

export default function Receiver() {
  return (
    <>
      <Navbars />
      <div className={styles.container}>
        <div className={styles.first}>Hey Vidya Devi!</div>
        <div className={styles.form}>
          <div className={styles.content}>
            <div className={styles.desc}>Add your Description here:-</div>
            <label>
              <input type="text" />
            </label>
            <div className={styles.button1}>
              <button>Update Description</button>
            </div>
            <div className={styles.button2}>
              <button>Upload Image</button>
            </div>
            <div className={styles.button3}>
              <button>Submit Request</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
