import { Typography } from "@mui/material";
import React from "react";

function TextProperty({ children, fontColor, fontSize, fontWeight }) {
  return (
    <Typography
      textAlign="center"
      color={fontColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      padding={0}
      margin={0}
    >
      {children}
    </Typography>
  );
}

export default TextProperty;
