import { CircularProgress, Typography } from "@mui/material";
import React from "react";
import "./weatherCard.css";
import { useSelector } from "react-redux";
import {
  selectWeatherInfo,
  selectWeatherInfoError,
  selectWeatherInfoLoading,
} from "../slice/WeatherSlice";
import NotFound from "../notFound/NotFound";

const WeatherCard = () => {
  const data = useSelector((state) => selectWeatherInfo(state));
  const loading = useSelector((state) => selectWeatherInfoLoading(state));
  const error = useSelector((state) => selectWeatherInfoError(state));

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : !data || error ? (
        <NotFound error={error}/>
      ) : (
        <div className="card-root">
          <div className="weather-image">
            <img
              src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@4x.png`}
            />
          </div>
          <div className="weather-info">
            <div className="weather-info-header">
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  color: "#0e1111",
                }}
              >
                Today
              </Typography>
              <Typography style={{ fontSize: "24px", fontWeight: "bold" }}>
                {data?.name}
              </Typography>
            </div>
            <div className="weather-info-description">
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  color: "#0e1111",
                }}
              >
                {`Temperature : ${data?.main?.temp}° C`}
              </Typography>
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  color: "#0e1111",
                }}
              >
                {data?.weather[0]?.description}
              </Typography>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherCard;
