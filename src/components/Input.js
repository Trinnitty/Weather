import React, { Fragment, useRef, useState } from "react";

export default function Input(props) {
  const inputEl = useRef(null);
  // const [city, setCity] = useState("");
  // const [servise, setServise] = useState("Metaweather");

  const { setCity, searchWeatherForCity } = props;

  const onButtonClick = () => {
    const city = inputEl.current.value;
    setCity(city);
    searchWeatherForCity(city);
    inputEl.current.value = "";
    searchWeatherForCity();
  };

  return (
    <Fragment>
      <input ref={inputEl} type="text" placeholder={"Enter city"} />
      <button onClick={onButtonClick}>
        <i className="fa fa-spinner fa-spin">find</i>
      </button>
    </Fragment>
  );
}
