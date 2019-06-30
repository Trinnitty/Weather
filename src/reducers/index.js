import { combineReducers } from "redux";
import { weatherReducer } from "./weatherReduser";
import { weatherServiseReducer } from "./weatherServiseReducer";
import { cityReducer } from "./cityReducer";

export const rootReducer = combineReducers({
  city: cityReducer,
  weatherServise: weatherServiseReducer,
  weather: weatherReducer
});
