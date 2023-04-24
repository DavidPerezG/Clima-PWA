import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ButtonPush from './ButtonPush';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const ListWeather = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const cities = ['New York', 'Tokyo', 'Hermosillo', 'Toronto', 'Santiago'];
    const promises = [];

    cities.forEach(city => {
      promises.push(
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e439300cd1648d670237b6c055e92390`
        )
      );
    });

    Promise.all(promises)
      .then(responses => {
        const data = responses.map(response => ({
          city: response.data.name,
          weather: response.data.weather[0].main,
          temp: Math.round(response.data.main.temp),
        }));
        setWeatherData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div style={styles.background1}>
        <div style={styles.background2}>
          <div style={styles.background3}>
            <AwesomeSlider style={styles.background4}>
              {weatherData.map((data, index) => (
                <div><h1>{data.city}: {data.weather} {data.temp} C°</h1>

                  <ButtonPush />
                </div>
              ))}
            </AwesomeSlider>
          </div>
        </div>
      </div>

    </>
  );
};

const styles = {
  background1: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    height: '100vh',
    width: '100vw',
    backgroundColor: "blue"
  },
  background2: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    height: '80%',
    width: '100%',
    backgroundColor: "orange",
  },
  background3: {
    height: '80%',
    width: '100%',
    backgroundColor: "red",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },
  background4: {
    height: '80%',
    width: '100%',
    backgroundColor: "green",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  }
}

export default ListWeather