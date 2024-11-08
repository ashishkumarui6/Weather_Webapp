import React, { useState } from "react";
import Container from "../../ui/container";
import styles from "./index.module.css";
import ValueCard from "../../components/ValueCard";
import Temperature_Comp from "../../components/Temperature_Comp";
import Button from "../../widgets/Button";

const Home = () => {
  const [city, setCity] = useState("");
  const [wapiData, setWapiData] = useState();
  const [isloading, setIsloading] = useState(false);

  const onGetsubmit = () => {
    setIsloading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84bda7a21d49cd2dac631eaf9f55044d&units=metric`
    )
      .then((res) => res.json())
      .then((finalRes) => {
        if (finalRes.cod == "404") {
          setWapiData(undefined);
        } else {
          setWapiData(finalRes);
        }
        setIsloading(false);
        console.log(finalRes);
      });
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
          {wapiData !== undefined ? (
            <>
              <div className={styles.mid}>
                <div className={isloading ? "" : "loading"}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"
                    alt="loading"
                  />
                </div>
                <Temperature_Comp
                  city={wapiData.name}
                  country={wapiData.sys.country}
                  temp={wapiData.main.temp}
                  desc={wapiData.weather[0].description}
                  img={`https://openweathermap.org/img/w${wapiData.weather[0].icon}.png`}
                />
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
            </>
          ) : (
            <p>No Data Found</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Home;
