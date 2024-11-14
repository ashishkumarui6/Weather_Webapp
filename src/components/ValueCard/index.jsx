import React from "react";
import styles from "./index.module.css";

const ValueCard = ({ top, bot }) => {
  return (
    <div className={styles.weatherDeatail}>
      <h2>{top}</h2>
      <p>{bot}</p>
    </div>
  );
};

export default ValueCard;
