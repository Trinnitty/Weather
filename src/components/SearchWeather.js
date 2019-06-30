import React, { useState } from "react";

export default function SearchWeather(props) {
  const [clickMetaweather, setClickMetaweather] = useState(true);
  const [clickStorm, setClickStorm] = useState(false);
  // const [servise, setServise] = useState("Openweathermap");

  const handleClickMetaweather = () => {
    props.setWeatherServise("Openweathermap");
    if (!clickMetaweather) {
      setClickMetaweather(!clickMetaweather);
      setClickStorm(!clickStorm);
    }
  };
  const handleClickStorm = () => {
    props.setWeatherServise("Storm");
    if (!clickStorm) {
      setClickMetaweather(!clickMetaweather);
      setClickStorm(!clickStorm);
    }
  };

  return (
    <div className="search">
      <button
        onClick={handleClickMetaweather}
        className={clickMetaweather ? "active" : ""}
      >
        Search weather by Openweathermap
      </button>
      <button onClick={handleClickStorm} className={clickStorm ? "active" : ""}>
        Search weather by Storm Glass
      </button>
    </div>
  );
}
