import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const LeftSide = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "65vh",
        left: "15vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography fontWeight="bolder" fontSize="3em" fontColor="#3D3D3D">
        Tell Me Your Trip!
      </Typography>
      <Typography fontSize="1.6em" fontWeight="normal" fontColor="#3D3D3D">
        PLANNERGRAM
      </Typography>
      <Typography fontSize="1.5em" fontWeight="bold" fontColor="whitesmoke">
        travel community
      </Typography>
    </Box>
  );
};

export default LeftSide;
