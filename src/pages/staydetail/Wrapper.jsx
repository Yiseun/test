import { Card, CardContent, Box } from "@mui/material";
import React from "react";

const Wrapper = ({ children, bgColor, marginSize, aligning }) => {
  return (
    <Card
      variant
      sx={{
        backgroundColor: bgColor,
        margin: marginSize,
        borderRadius: "1rem",
        padding: 0,
      }}
    >
      <Box>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: aligning,
            justifyContent: "space-between",
          }}
        >
          {children}
        </CardContent>
      </Box>
    </Card>
  );
};

export default Wrapper;
