import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardDetail = ({ handleBoard, setBoardId, city }) => {
  const navigate = useNavigate();

  function handler(props) {
    navigate(`/board/${props}`);
  }

  return (
    <Box sx={{ margin: "0.2rem", marginBottom: "0.8rem" }}>
      <Box
        sx={{ display: "flex" }}
        onClick={() => {
          handler(city.boardId);
          setBoardId(city.boardId);
          handleBoard();
        }}
      >
        <CityComponent>{city.boardName}</CityComponent>
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
