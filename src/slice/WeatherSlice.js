import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "your_key";

export const getWeatherData = createAsyncThunk(
  "weather/weatherInfo",
  async (city, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err?.response);
    }
  }
);

const initialState = {
  weatherInfo: null,
  weatherInfoLoading: false,
  error: null,
};

const weatherInfo = createSlice({
  name: "weatherInfo",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getWeatherData.pending, (state, action) => {
        state.weatherInfoLoading = true;
        state.error = null;
      })
      .addCase(getWeatherData.fulfilled, (state, action) => {
        state.weatherInfo = action.payload;
        state.weatherInfoLoading = false;
        state.error = null;
      })
      .addCase(getWeatherData.rejected, (state, action) => {
        state.weatherInfo = null;
        state.weatherInfoLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectWeatherInfo = (state) => state.weather.weatherInfo;
export const selectWeatherInfoLoading = (state) =>
  state.weather.weatherInfoLoading;
export const selectWeatherInfoError = (state) => state.weather.error;

export default weatherInfo.reducer;
