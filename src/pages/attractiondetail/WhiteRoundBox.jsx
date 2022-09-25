import { Box } from "@mui/system";
import React from "react";

const WhiteRoundBox = ({ children }) => {
  return (
    <Box
      sx={{
        display: "block",
        border: "2px dashed #F2E2FC",
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

export default WhiteRoundBox;
