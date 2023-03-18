import React from "react";
import Navbar2 from "../Navbar/Navbar2";
import styles from "./Dashboard.module.css";
// import { Input, Button } from "react";

export default function Dashboard() {
  return (
    <>
      <Navbar2 />
      <div className={styles.main}>
        <div className={styles.text}>Help Healing your Community</div>
        <button className={styles.button3}>SIGN UP</button>
      </div>
    </>
  );
}
