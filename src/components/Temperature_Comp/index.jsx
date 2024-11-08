import React from "react";
import styles from "./index.module.css";

const Temperature_Comp = ({ name }) => {
  return (
    <div className={styles.content}>
      <h1>Mumbai, IN</h1>
      <p>As of 11:00:00 AM</p>
      <div className={styles.temp}>
        <h1>
          31
          <sup className={styles.degree}>{name}</sup>
          <sup>c</sup>
        </h1>
        <div>
          <p>smoke</p>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temperature_Comp;
