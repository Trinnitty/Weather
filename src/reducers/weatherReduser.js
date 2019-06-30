const initialState = {
  lastUpdate: "",
  temprature: "",
  humidity: "",
  visibility: "",
  temp_min: "",
  temp_max: "",
  description: "",
  wind: ""
};

export function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_WEATHER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
