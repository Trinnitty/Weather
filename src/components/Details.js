import React from "react";

export default function Details(props) {
  const { humidity, visibility, wind, temp_max, temp_min } = props.weather;

  return (
    <div className="details">
      <div>Details</div>
      <div className="flexColumn">
        <div>Humidity</div> <div>{humidity} %</div>
      </div>
      <div className="flexColumn">
        <div>Visibility</div> <div>{visibility / 1000} km</div>
      </div>
      <div className="flexColumn">
        <div>Wind</div> <div>{wind} km/h</div>
      </div>
      <div className="flexColumn">
        <div>Max temperature</div> <div>{temp_max} C</div>
      </div>
      <div className="flexColumn">
        <div>Min temperature</div> <div>{temp_min} C</div>
      </div>
    </div>
  );
}
