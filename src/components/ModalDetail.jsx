import {
  Box,
  Button,
  createTheme,
  Divider,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import ModalAttractionResult from "./modalSearch/ModalAttractionResult";
import ModalRentcarResult from "./modalSearch/ModalRentcarResult";
import ModalStayResult from "./modalSearch/ModalStayResult";
import ModalTrainResult from "./modalSearch/ModalTrainResult";

const ModalDetail = ({ currentCategory }) => {
  const theme = createTheme({
    palette: {
      primary: {
        // 가장 어두운 보라
        main: "#52057B",
      },
      secondary: {
        // 가장 밝은 보라
        main: "#BC6FF1",
      },
      info: {
        // 중간 보라
        main: "#892CDC",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Divider />
      {currentCategory === "stay" ? (
        <Box>
          <ModalStayResult />
        </Box>
      ) : currentCategory === "attraction" ? (
        <Box>
          <ModalAttractionResult />
        </Box>
      ) : currentCategory === "train" ? (
        <Box>
          <ModalTrainResult />
        </Box>
      ) : (
        <Box>
          <ModalRentcarResult />
        </Box>
      )}
    </ThemeProvider>
  );
};

export default ModalDetail;
