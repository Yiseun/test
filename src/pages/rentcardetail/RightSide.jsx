import { Card, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Wrapper from "./Wrapper";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RightSide = ({
  imgUrl,
  address,
  companyName,
  carSort,
  carName,
  likeClick,
  likeCount,
  setLikeCount,
  handleLikeClick,
}) => {
  return (
    <Wrapper marginSize="0rem" bgColor="#F2E2FC">
      <Typography
        display="flex"
        alignItems="center"
        className="dashBoardTitle"
        fontSize={22}
        fontWeight="bold"
        marginRight="1rem"
      >
        {carName} - {carSort}
        <Box margin="5px" onClick={handleLikeClick}>
          {likeClick ? (
            <Box display="flex" alignItems="center">
              <FavoriteIcon
                color="info"
                onClick={() => {
                  setLikeCount(likeCount - 1);
                }}
                sx={{ paddingTop: "0.4rem" }}
              />
              <Typography margin="5px">{likeCount}</Typography>
            </Box>
          ) : (
            <Box display="flex" alignItems="center">
              <FavoriteBorderIcon
                color="info"
                sx={{ paddingTop: "0.4rem" }}
                onClick={() => {
                  setLikeCount(likeCount + 1);
                }}
              />
              <Typography margin="5px">{likeCount}</Typography>
            </Box>
          )}
        </Box>
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
        <Typography
          className="dashBoardTitle"
          fontSize={17}
          fontWeight="bold"
          marginRight="1rem"
        >
          {companyName} : {address} <br />
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
          환불 및 취소 규정
        </Typography>
        <Typography className="dashBoardTitle" fontSize={14} marginRight="1rem">
          예약 6일전 : 100% 환불 <br />
          예약 5일전 : 90% 환불 <br />
          예약 4일전 : 80% 환불 <br />
          예약 3 ~ 1일전 : 50% 환불 <br />
          예약 당일 : 환불불가
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default RightSide;
