import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const DashboardDetail = ({ regionAndCities }) => {
  return (
    <Box sx={{ margin: "0.2rem", marginBottom: "0.8rem" }}>
      <Typography
        fontWeight="bold"
        fontSize={16}
        sx={{ marginBottom: "0.2rem" }}
      >
        {regionAndCities.region}
      </Typography>
      <Box sx={{ display: "flex" }}>
        {regionAndCities.citiList.map((city, index) => {
          if (index !== 0) {
            return <CityComponent fontSizeNum="16">| {city}</CityComponent>;
          }
          return <CityComponent fontSizeNum="16">{city}</CityComponent>;
        })}
      </Box>
    </Box>
  );
};

const CityComponent = ({ children }) => {
  return (
    <Typography
      fontWeight="light"
      color="#625D65"
      sx={{
        fontSize: 14,
        float: "left",
        paddingLeft: "0.5rem",
      }}
    >
      {children}
    </Typography>
  );
};

export default DashboardDetail;
