import { Typography } from "@mui/material";
import React from "react";

const PurpleText = ({ children }) => {
  return (
    <Typography
      className="dashBoardTitle"
      fontSize={15}
      fontWeight="bolder"
      margin="auto"
      color="#892CDC"
    >
      {children}
    </Typography>
  );
};

export default PurpleText;
