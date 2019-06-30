export function weatherAction(weather) {
  return {
    type: "SET_WEATHER",
    payload: {
      lastUpdate: weather.lastUpdate,
      temprature: weather.temprature,
      humidity: weather.humidity,
      visibility: weather.visibility,
      temp_min: weather.temp_min,
      temp_max: weather.temp_max,
      description: weather.description,
      wind: weather.wind
    }
  };
}
