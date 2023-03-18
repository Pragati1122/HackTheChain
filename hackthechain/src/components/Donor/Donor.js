import React from "react";
import Navbars from "../Navbar/Navbars";
import styles from "./Donor.module.css";
import Card from "./Card.js";
export default function Donor() {
  return (
    <>
      <Navbars />
      <div className={styles.head}>
        <div className={styles.top}>Donation Requests</div>
        <div className={styles.cards}>
          <div className={styles.row}>
            <Card className={styles.ca} />
            <Card className={styles.ca} />
            <Card className={styles.ca} />
          </div>
          <div className={styles.row}>
            <Card className={styles.ca} />
            <Card className={styles.ca} />
            <Card className={styles.ca} />
          </div>
          <div className={styles.row}>
            <Card className={styles.ca} />
            <Card className={styles.ca} />
            <Card className={styles.ca} />
          </div>
        </div>
      </div>
    </>
  );
}
