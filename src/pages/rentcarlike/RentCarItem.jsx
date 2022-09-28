import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  ListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { makeOrderAttractionImg } from "../../image/attractionImg";
import { makeOrderCarImg } from "../../image/carImg";
import TextProperty from "./TextProperty";

const RentCarItem = ({ rentCar }) => {
  const navigate = useNavigate();

  function handleAttractionDetail(rentCarId) {
    navigate(`/rentcar/${rentCarId}`, {
      state: {
        rentCarId: rentCarId,
      },
    });
  }
  return (
    <>
      <Card
        onClick={() => {
          handleAttractionDetail(rentCar.rentCarId);
        }}
        key={rentCar.rentCarId}
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
            image={makeOrderCarImg(rentCar.rentCarId, 15)}
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
                {rentCar.carName}
              </Typography>
              <Typography
                color="#892CDC"
                fontWeight="bold"
                fontSize="14px"
                noWrap
              >
                {rentCar.address}
              </Typography>
            </div>
          </Box>
        </CardActionArea>
      </Card>
    </>
  );
};

export default RentCarItem;
