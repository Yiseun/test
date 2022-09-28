import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PurpleText from "./PurpleText";
import RoundBox from "./RoundBox";
import WhiteRoundBox from "./WhiteRoundBox";
import SearchIcon from "@mui/icons-material/Search";
import Wrapper from "./Wrapper";
import TextProperty from "./TextProperty";

const LeftSide = ({
  attractionName,
  attractionPrice,
  attractionAddress,
  imgUrl,
}) => {
  return (
    <Card
      variant
      sx={{
        backgroundColor: "#F0F0F0",
        margin: 0,
        borderRadius: "1rem",
        padding: 0,
        height: "100%",
      }}
    >
      <Box>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            justifyContent: "space-between",
          }}
        >
          <Wrapper marginSize="0.1rem" bgColor="#E3E3E3">
            <TextProperty fontColor="#333333" fontSize="20" fontWeight="bold">
              관광지 정보
            </TextProperty>
          </Wrapper>
          <Wrapper marginSize="0.3rem" bgColor="#E3E3E3">
            <Card
              variant="outlined"
              sx={{
                borderRadius: "1rem",
                margin: "0.3rem",
              }}
            >
              <CardMedia component="img" src={imgUrl} />
            </Card>

            <Wrapper marginSize="0.3rem" bgColor="#D8D8D8">
              <TextProperty
                fontColor="#333333"
                fontSize="16"
                fontWeight="normal"
              >
                {attractionName}
              </TextProperty>
            </Wrapper>
            <Wrapper marginSize="0.3rem" bgColor="#D8D8D8">
              <TextProperty
                fontColor="#333333"
                fontSize="16"
                fontWeight="normal"
              >
                {attractionAddress}
              </TextProperty>
            </Wrapper>
            <Wrapper marginSize="0.3rem" bgColor="#C1C1C1">
              <TextProperty fontColor="white" fontSize="16" fontWeight="normal">
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://www.tripadvisor.co.kr/Attractions-g294196-Activities-South_Korea.html"
                >
                  예약하기
                </a>
              </TextProperty>
            </Wrapper>
          </Wrapper>
        </CardContent>
      </Box>
    </Card>
  );
};

export default LeftSide;
