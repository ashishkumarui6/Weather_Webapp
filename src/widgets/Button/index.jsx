import React from "react";
import styles from "./index.module.css";

const Button = ({ name, onclick }) => {
  return (
    <div className={styles.Btn}>
      <button onClick={onclick}>{name}</button>
    </div>
  );
};

export default Button;
