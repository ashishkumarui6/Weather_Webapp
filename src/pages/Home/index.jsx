import React, { useState } from "react";
import Container from "../../ui/container";
import styles from "./index.module.css";
import ValueCard from "../../components/ValueCard";
import Temperature_Comp from "../../components/Temperature_Comp";
import Button from "../../widgets/Button";

const Home = () => {
  const [city, setCity] = useState("");
  const [submit, setSubmit] = useState("");
  const [wapiData, setWapiData] = useState();

  const onGetsubmit = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84bda7a21d49cd2dac631eaf9f55044d`
    )
      .then((res) => res.json())
      .then((finalRes) => {
        setWapiData(finalRes);
      });
    console.log(wapiData);
    setSubmit(city);
    setCity("");
  };

  return (
    <Container>
      <div className={styles.weather}>
        <div className={styles.Container}>
          <div className={styles.top}>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input type="text" />
            <Button name="Submit" onclick={onGetsubmit} />
          </div>
          <div className={styles.mid}>
            <Temperature_Comp />
          </div>
          <div className={styles.bot}>
            <ValueCard />
            <ValueCard />
            <ValueCard />
            <ValueCard />
            <ValueCard />
            <ValueCard />
            <ValueCard />
            <ValueCard />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
