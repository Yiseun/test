import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { makeOrderCarImg } from "../../image/carImg.js";

const RentCarItem = ({ rentcar, handleRoute }) => {
  return (
    <Card
      onClick={() => {
        handleRoute(`rentcar/${rentcar.rentCarId}`);
      }}
      key={rentcar.rentCarId}
      sx={{
        width: "200px",
        display: "flex",
        justifyContent: "space-between",
        margin: "10px",
        borderRadius: "30px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={makeOrderCarImg(rentcar.rentCarId, 15)}
          alt="Hot Posts"
          height="200px"
        />

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            bgcolor: "rgba(255, 255, 255, 0.8)",
            padding: "10px",
          }}
        >
          <div style={{ alignItems: "baseline" }}>
            <Typography
              fontSize="16px"
              color="#52057B"
              fontWeight="bold"
              noWrap
            >
              {rentcar.carName}
            </Typography>
            <Typography
              color="#892CDC"
              fontWeight="bold"
              fontSize="14px"
              noWrap
            >
              {rentcar.companyName}
            </Typography>
          </div>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default RentCarItem;
