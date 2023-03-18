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
            <div className={styles.ca}>
              <Card />
            </div>
            <div className={styles.ca}>
              <Card />
            </div>
            <div className={styles.ca}>
              <Card />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.ca}>
              <Card />
            </div>
            <div className={styles.ca}>
              <Card />
            </div>
            <div className={styles.ca}>
              <Card />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.ca}>
              <Card />
            </div>
            <div className={styles.ca}>
              <Card />
            </div>
            <div className={styles.ca}>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
