import React, { Component, PureComponent } from "react";
import Location from "./Location";
import weatherServices from "../services/weatherServices";
import LocationService from "../services/LocationService";
import SearchLocationName from "../services/SearchLoacationName";
import SearchWeather from "./SearchWeather";
import DescriptionWeather from "./DescriptionWeather";
import Input from "./Input";
import Details from "./Details";
import WeatherServise from "./WeatherServise";
import { connect, dispatch } from "react-redux";
import { setCity } from "../actions/cityAction";
import { weatherAction } from "../actions/weatherAction";
import { setWeatherServise } from "../actions/weatherServiseAction";

class App extends PureComponent {
  componentDidMount = () => {
    const { setCityAction } = this.props;
    const { city } = this.props.city;
    if (!localStorage.getItem(city)) {
      // console.log(ymaps.geolocation.city);
      // 2 variant
      SearchLocationName.getGeolocation()
        .then(response => response.json())
        .then(jsonData => {
          console.log(jsonData, "json location name");
          // let city = jsonData.city_name;
          // setCityAction(city);
        })
        .catch(error => {
          console.log(error.message, "error geolocation");
        });
      // 1-variant
      // setTimeout(
      //   LocationService.getCity()
      //     .then(response => response.json())
      //     .then(jsonData => {
      //       console.log(jsonData, "json location name");
      //       let city = jsonData.city_name;
      // localStorage.setItem(city, jsonData.city_name)
      //       setCityAction(city);
      //     })
      //     .catch(error => {
      //       console.log(error.message, "error geolocation");
      //     }),
      //   3500
      // );
    }
  };

  searchWeatherForCity = city => {
    const { weatherServise } = this.props.weatherServise;
    const { setWeatherAction } = this.props;
    console.log(city);
    if (
      (city === this.props.city.city &&
        new Date().getHours() - this.props.weather.lastUpdate > 2) ||
      city !== this.props.city.city
    ) {
      if (weatherServise === "Openweathermap") {
        weatherServices
          .getWeatherThrooghMetaweather(city)
          .then(response => response.json())
          .then(jsonData => {
            console.log(jsonData, "jsonData");
            let responce = {
              lastUpdate: new Date().getHours(),
              temprature: jsonData.main.temp,
              humidity: jsonData.main.humidity,
              visibility: jsonData.visibility,
              temp_min: jsonData.main.temp_min,
              temp_max: jsonData.main.temp_max,
              description: jsonData.weather[0].main,
              wind: jsonData.wind.speed
            };

            return responce;
          })
          .then(data => setWeatherAction(data))
          .catch(error => {
            // if (!city) {
            //   alert("Enter city name");
            // }
            // if (city) {
            //   alert("Enter correct city name");
            // }
            // console.log(error.message);
          });
      }
    }
  };

  render() {
    const { setCityAction, setWeatherServiseAction, weather } = this.props;
    const { city } = this.props.city;
    const { weatherServise } = this.props.weatherServise;

    return (
      <div
        // onLoad={this.getLocation()}
        className={
          new Date().getHours() < 7 || new Date().getHours() > 20
            ? "App night"
            : "App"
        }
      >
        <SearchWeather setWeatherServise={setWeatherServiseAction} />
        <Input
          setCity={setCityAction}
          searchWeatherForCity={this.searchWeatherForCity}
        />
        <WeatherServise weatherServise={weatherServise} />
        <DescriptionWeather city={city} weather={weather} />
        <Details weather={weather} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    city: store.city,
    weatherServise: store.weatherServise,
    weather: store.weather
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setCityAction: city => dispatch(setCity(city)),
    setWeatherServiseAction: servise => dispatch(setWeatherServise(servise)),
    setWeatherAction: weather => dispatch(weatherAction(weather))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
