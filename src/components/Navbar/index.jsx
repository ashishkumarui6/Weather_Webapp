import React from "react";
import styles from "./index.module.css";
import logo from "../../assets/logo.png";
import Container from "../../ui/container";

const Navbar = () => {
  return (
    <Container>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
