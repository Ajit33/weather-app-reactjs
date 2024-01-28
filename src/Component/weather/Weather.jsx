import React, { useEffect, useState } from "react";
import Search from "../search/Search";

const Weather = () => {
  const [search, setsearch] = useState("");
  const [loading, setloading] = useState(false);
  const [weatherdata, setweatherData] = useState(null);
  async function fetchWeatherData(param) {
    setloading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=a7da2192dc943504af43743fb3fd2714`
      );
      const data = await response.json();
      if (data) {
        setloading(false);
        setweatherData(data);
      }
    } catch (e) {
      console.log(e);
    }
  }
  async function handelsearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate(){
    return new Date().toLocaleDateString('en-us',{
        weekday:'long',
        month:'long',
        day:'numeric',
        year:'numeric'
    })
  }

  useEffect(() => {
    fetchWeatherData("odisha");
  }, []);
  console.log(weatherdata);
  return (
    <div>
      <Search
        search={search}
        setsearch={setsearch}
        handelsearch={handelsearch}
      />
      {loading ? (
        <div>Loading Please Wait !</div>
      ) : (
        <div className="bg-pink-700 w-full h-[700px">
          <div>
            <h2>
              {weatherdata?.name},<span>{weatherdata?.sys.country}</span>
            </h2>
          </div>

          <div>
           <span>{getCurrentDate()}</span>
          </div>
            <div>
                <div>{weatherdata?.main?.temp}</div>
                <p >
                    {
                        weatherdata &&weatherdata.weather && weatherdata.weather[0] ?weatherdata.weather[0].description : null
                    }
                </p>
                <div>
                    <div></div>
                    <p>{weatherdata?.main?.humidity}</p>
                    <p>Humidity</p>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
