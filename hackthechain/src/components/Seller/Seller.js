import React from "react";
import Navbars from "../Navbar/Navbars";
import styles from "./Seller.module.css";
import { Input, Button } from "react";

export default function Receiver() {
  return (
    <>
      <Navbars />
      <div className={styles.container}>
        <div className={styles.first}>Hey Star Enterprises!</div>
        <div className={styles.content}>
          <div className={styles.token}>Current Tokens : 12</div>
          <div className={styles.total}>Total Earning : 324 ETH</div>
          <div className={styles.button4}>
            <button>Convert to ETH</button>
          </div>
        </div>
      </div>
    </>
  );
}
// code
