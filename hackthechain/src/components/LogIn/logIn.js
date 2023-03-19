import React from "react";
// import Navbars from "../Navbar/Navbars";
import styles from "./logIn.module.css";

// import { Input, Button } from "react";

export default function LogIn() {
  return (
    <>
      {/* <Navbars /> */}
      {/* <div className={styles.main}>
        <div className={styles.text}>Help Healing your Community</div>
        <button className={styles.button3}>SIGN UP</button>
      </div> */}
      <div className={styles.container}>
        <div className={styles.subContainer}>
        <div className={styles.leftPart}>
        <div className={styles.logo}>MedChain</div>
        <div className={styles.form}>
        <div className={styles.head}>WELCOME BACK</div>
          <div className={styles.content}>
            <div className={styles.desc}>NAME :</div>
            <label>
              <input type="text" />
            </label>
            <div className={styles.desc}>PASSWORD :</div>
            <label>
              <input type="password" />
            </label>
            <button className={styles.btn}><a href="/">Login</a></button>
            {/* <div className={styles.button3}>
              <button>Submit Request</button>
            </div> */}
          </div>
        </div>
        </div>
        {/* <div className={styles.img}>
        <img src={require('./signupImage.png')} alt="fireSpot"/>
        </div> */}
        </div>
        
      </div>
      
      
    </>
  );
}
