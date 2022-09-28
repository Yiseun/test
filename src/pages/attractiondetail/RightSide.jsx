import { Card, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Wrapper from "./Wrapper";
import TextProperty from "./TextProperty";
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
    <>
      <Wrapper marginSize="0rem" bgColor="#F2E2FC">
        <Typography
          className="dashBoardTitle"
          fontSize={22}
          fontWeight="bold"
          marginRight="1rem"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {attractionName}{" "}
          <span onClick={handleLikeClick}>
            {likeClick ? (
              <Box display="flex" alignItems="center">
                <FavoriteIcon
                  color="info"
                  onClick={() => {
                    setAttractionLikeCount(attractionLikeCount - 1);
                  }}
                  sx={{ paddingTop: "0.4rem" }}
                />
                <Typography margin="5px">{attractionLikeCount + 1}</Typography>
              </Box>
            ) : (
              <Box display="flex" alignItems="center">
                <FavoriteBorderIcon
                  color="info"
                  sx={{ paddingTop: "0.4rem" }}
                  onClick={() => {
                    setAttractionLikeCount(attractionLikeCount + 1);
                  }}
                />
                <Typography margin="5px">{attractionLikeCount}</Typography>
              </Box>
            )}
          </span>
        </Typography>
        <Card
          variant="outlined"
          sx={{
            borderRadius: "2rem",
            margin: "1rem",
          }}
        >
          <CardMedia component="img" src={imgUrl} />
        </Card>
        <Box
          sx={{
            padding: "1rem",
          }}
        >
          {" "}
          <Typography
            className="dashBoardTitle"
            fontSize={17}
            fontWeight="bold"
            marginRight="1rem"
            paddingBottom="0.2rem"
          >
            {attractionName}{" "}
          </Typography>
          <Typography
            className="dashBoardTitle"
            fontSize={14}
            marginRight="1rem"
          >
            {attractionAddressDetail}{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "1rem",
          }}
        >
          <Typography
            className="dashBoardTitle"
            fontSize={17}
            fontWeight="bold"
            marginRight="1rem"
            paddingBottom="0.2rem"
          >
            주소{" "}
          </Typography>
          <Typography
            className="dashBoardTitle"
            fontSize={14}
            marginRight="1rem"
          >
            {attractionAddress}
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "1rem",
          }}
        >
          <Typography
            className="dashBoardTitle"
            fontSize={17}
            fontWeight="bold"
            marginRight="1rem"
            paddingBottom="0.2rem"
          >
            입장료
          </Typography>
          <Typography
            className="dashBoardTitle"
            fontSize={14}
            marginRight="1rem"
          >
            {attractionPrice}
          </Typography>
        </Box>
      </Wrapper>
    </>
  );
};

export default RightSide;
