import { configureStore } from "@reduxjs/toolkit";
import weatherInfoReducer from "../slice/WeatherSlice";

export default configureStore({
  reducer: {
    weather: weatherInfoReducer,
  },
});
