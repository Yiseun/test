import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import { makeTrainImg } from "../../image/trainImg";
import "./trainList.css";

const TrainList = ({ train }) => {
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#52057B",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#BC6FF1",
      },
      info: {
        main: "#892CDC",
      },
      disabled: {
        main: "#8C8C8C",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ margin: "10px", borderRadius: "30px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={makeTrainImg("")}
            alt="Train"
            height="200px"
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              bgcolor: "rgba(255, 255, 255, 0.8)",
              paddingTop: "10px",
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box className="dep" justifyItems="center" alignItems="center">
              <Typography color="#52057B">출발지</Typography>
              <Typography fontWeight="bold" color="#892CDC">
                {train.depplaceNodeName}
              </Typography>
            </Box>
            <Typography fontWeight="bold" margin="10px">
              →
            </Typography>
            <Box className="arr">
              <Typography color="#52057B">도착지</Typography>
              <Typography fontWeight="bold" color="#892CDC">
                {train.arrplaceNodeName}
              </Typography>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
};

export default TrainList;
