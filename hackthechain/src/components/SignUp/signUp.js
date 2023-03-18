import React from "react";
// import Navbars from "../Navbar/Navbars";
import styles from "./signUp.module.css";
import DropdownExampleSelection from "./dropDown.js";
// import { Input, Button } from "react";

export default function SignUp() {
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
        <div className={styles.head}>CREATE AN ACCOUNT</div>
          <div className={styles.content}>
            <div className={styles.desc}>NAME :</div>
            <label>
              <input type="text" />
            </label>
            <div className={styles.desc}>PHONE NUMBER :</div>
            <label>
              <input type="text" />
            </label>
            <div className={styles.drop}><DropdownExampleSelection /></div>
            <div className={styles.desc}>PASSWORD :</div>
            <label>
              <input type="password" />
            </label>
            {/* <div className={styles.button1}>
              <button>Connect Metamask</button>
            </div>
            <div className={styles.button2}>
              <button>Create Account</button>
            </div> */}
            <button className={styles.btn1}>Connect Metamask</button>
            <button className={styles.btn2}>Create Account</button>
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

