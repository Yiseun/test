import { Typography } from "@mui/material";
import React from "react";
const TextProperty = ({ children, onClick }) => {
  return (
    <Typography
      textAlign="center"
      fontWeight="normal"
      fontSize={14}
      onClick={onClick}
    >
      {children}
    </Typography>
  );
};
export default TextProperty;
