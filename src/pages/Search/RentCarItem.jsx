import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { makeOrderCarImg } from "../../image/carImg.js";

const RentCarItem = ({ rentcar }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "200px",
        display: "flex",
        margin: "10px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="150px"
          image={makeOrderCarImg(rentcar.rentCarId, 15)}
          alt="Hot Posts"
          width="100px"
        />
        <CardContent>
          <Typography noWrap gutterBottom variant="h5" component="div">
            {rentcar.carName}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {rentcar.address}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RentCarItem;
