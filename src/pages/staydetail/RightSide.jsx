import { Card, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Wrapper from "./Wrapper";

const RightSide = ({
  stayAddress,
  stayLikeCount,
  stayName,
  stayPrice,
  stayCheckin,
  stayCheckOut,
  imgUrl,
}) => {
  return (
    <Wrapper marginSize="0rem" bgColor="#F2E2FC">
      <Typography
        className="dashBoardTitle"
        fontSize={22}
        fontWeight="bold"
        marginRight="1rem"
      >
        {stayName}
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
          주소 <br />
          {stayAddress} <br />
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
          숙박일 6일전 : 100% 환불 <br />
          숙박일 5일전 : 90% 환불 <br />
          숙박일 4일전 : 80% 환불 <br />
          숙박일 3 ~ 1일전 : 50% 환불 <br />
          숙박당일 : 환불불가
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default RightSide;
