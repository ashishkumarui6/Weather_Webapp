import React from "react";
import styles from "./index.module.css";

const ValueCard = () => {
  return (
    <div className={styles.weatherDeatail}>
      <h2>High/Low</h2>
      <p>30/30</p>
    </div>
  );
};

export default ValueCard;
