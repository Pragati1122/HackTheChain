import React from "react";
import { Link, Input, Form } from "react";

import styles from "./Navbar.module.css";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navbar2() {
  return (
    <>
      <nav className={styles.navbar2}>
        <div className={styles.logo}>
          <div>MedChain</div>
        </div>
        <ul>
          <li>
            <div>LOGIN</div>
          </li>
          <li>
            <div>SIGNUP</div>
          </li>
          <li>
            <div>About Us</div>
          </li>
        </ul>
      </nav>
    </>
  );
}
