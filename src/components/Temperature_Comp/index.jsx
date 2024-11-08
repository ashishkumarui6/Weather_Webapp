import React from "react";
import styles from "./index.module.css";

const Temperature_Comp = ({ img, city, country, temp, desc }) => {
  return (
    <div className={styles.content}>
      <h1>
        {city}, {country}
      </h1>
      <p>As of 11:00:00 AM</p>
      <div className={styles.temp}>
        <h1>
          {temp}
          <sup className={styles.degree}>o</sup>
          <sup>c</sup>
        </h1>
        <div>
          <p>{desc}</p>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temperature_Comp;
