import React, { useState } from "react";
import styles from "./index.module.css";

const Temperature_Comp = ({ img, city, country, temp, desc }) => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState();

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime, 1000);
  return (
    <div className={styles.content}>
      <h1>
        {city}, {country}
      </h1>
      <p>As of {ctime}</p>
      <div className={styles.temp}>
        <h1>
          {temp}
          <sup className={styles.degree}>o</sup>
          <sup>c</sup>
        </h1>
        <div>
          <p>{desc}</p>
          <div>
            <img src={img} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temperature_Comp;
