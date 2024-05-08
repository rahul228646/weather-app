import { Typography } from "@mui/material";
import React from "react";

const NotFound = ({ error }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        textAlign: "center",
        gap: "20px",
      }}
    >
      <img
        src={
          error?.status === 404
            ? "/src/assets/not-found.png"
            : "/src/assets/search.png"
        }
        height={150}
        width={150}
      />
      <Typography fontWeight={600}>
        {error?.status === 404
          ? "No data found for the searched city, Try Changing the city"
          : "Search a city to know its weather"}
      </Typography>
    </div>
  );
};

export default NotFound;
