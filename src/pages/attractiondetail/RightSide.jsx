import { Card, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RightSide = ({
  attractionName,
  attractionLikeCount,
  setAttractionLikeCount,
  handleLikeClick,
  likeClick,
  imgUrl,
  attractionAddress,
  attractionAddressDetail,
  attractionPrice,
}) => {
  return (
    <Box>
      <Typography
        sx={{
          display: "flex",
          marginLeft: "3rem",
          flexDirection: "column",
          paddingRight: "6rem",
          alignItems: "flex-start",
        }}
      >
        <Box
          className="attractionLikeCount"
          sx={{
            display: "flex",
            marginLeft: "5rem",
            marginBottom: "1rem",
            paddingRight: "6rem",
            alignItems: "center",
          }}
        >
          <Typography
            className="dashBoardTitle"
            fontSize={22}
            fontWeight="bold"
            marginRight="1rem"
          >
            {attractionName}
          </Typography>
          <span onClick={handleLikeClick}>
            {likeClick ? (
              <FavoriteIcon
                color="info"
                onClick={() => {
                  setAttractionLikeCount(attractionLikeCount - 1);
                }}
                sx={{ paddingTop: "0.4rem" }}
              />
            ) : (
              <FavoriteBorderIcon
                color="info"
                sx={{ paddingTop: "0.4rem" }}
                onClick={() => {
                  setAttractionLikeCount(attractionLikeCount + 1);
                }}
              />
            )}
          </span>
          <Typography
            sx={{
              marginLeft: "0.5rem",
              color: "#892CDC",
              fontWeight: "bold",
            }}
          >
            {attractionLikeCount}
          </Typography>
        </Box>
        <Card
          variant="outlined"
          sx={{
            borderRadius: "2rem",
            width: "20rem",
            marginLeft: "5rem",
          }}
        >
          <CardMedia component="img" src={imgUrl} />
        </Card>

        <Box className="attractionDetail">
          <Typography
            className="dashBoardTitle"
            fontSize={17}
            fontWeight="bold"
            margin="auto"
            paddingLeft="5rem"
            paddingTop="2rem"
            marginBottom="1rem"
          >
            {attractionAddress}
            <br />
            {attractionAddressDetail}
            관광지 입장료
            <br />- {attractionPrice}
          </Typography>
          <br />
        </Box>
      </Typography>
    </Box>
  );
};

export default RightSide;
