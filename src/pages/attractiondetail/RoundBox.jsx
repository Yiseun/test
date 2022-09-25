import { Box } from "@mui/system";
import React from "react";
const RoundBox = ({ children }) => {
  return (
    <Box
      sx={{
        display: "block",
        backgroundColor: "#F2E2FC",
        padding: "0.5rem",
        minWidth: "10rem",
        borderRadius: "6rem",
        margin: "auto",
        marginBottom: "1rem",
        textAlign: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default RoundBox;
