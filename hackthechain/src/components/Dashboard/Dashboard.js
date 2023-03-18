import React from "react";
import Navbars from "../Navbar/Navbars";
import styles from "./Dashboard.module.css";
// import { Input, Button } from "react";

export default function Dashboard() {
  return (
    <>
      <Navbars />
      <div className={styles.main}>
        <div className={styles.text}>Help Healing your Community</div>
        <button className={styles.button3}>SIGN UP</button>
      </div>
    </>
  );
}
