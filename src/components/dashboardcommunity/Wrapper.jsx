import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          backgroundColor: "#F2E2FC",
          height: "82vh",
          minWidth: "200px",
          padding: "20px 10px 20px 40px",
          borderRadius: 3,
        }}
      >
        <Typography
          className="dashBoardTitle"
          fontSize={18}
          fontWeight="bold"
          paddingBottom={1}
        >
          Travel Board
        </Typography>
        {children}
      </Box>
    </div>
  );
};

export default Wrapper;
