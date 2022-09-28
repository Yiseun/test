import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  makeAttractionImg,
  makeOrderAttractionImg,
} from "../../image/attractionImg";

const ContentCard = ({ attraction, handleRoute }) => {
  return (
    <Card
      onClick={() => {
        handleRoute(`attraction/${attraction.attractionId}`);
      }}
      key={attraction.attractionId}
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
          image={makeOrderAttractionImg(attraction.attractionId)}
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
              fontSize="18px"
              color="#52057B"
              fontWeight="bold"
              margin={1}
              noWrap
            >
              {attraction.name}
            </Typography>
            <Typography
              color="#892CDC"
              fontWeight="bold"
              fontSize="14px"
              noWrap
            >
              {attraction.address}
            </Typography>
          </div>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default ContentCard;
