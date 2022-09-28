import { Card, CardMedia, CardContent, Box, Typography } from "@mui/material";
import React from "react";
import TextProperty from "./TextProperty";
import Wrapper from "./Wrapper";

const LeftSide = ({ imgUrl, stayPrice, stayName }) => {
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
              객실 정보
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
                {stayName}
              </TextProperty>
            </Wrapper>
            <Wrapper marginSize="0.3rem" bgColor="#D8D8D8">
              <TextProperty
                fontColor="#333333"
                fontSize="16"
                fontWeight="normal"
              >
                {stayPrice} 원
              </TextProperty>
            </Wrapper>
            <Wrapper marginSize="0.3rem" bgColor="#C1C1C1">
              <TextProperty fontColor="white" fontSize="16" fontWeight="normal">
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://www.goodchoice.kr/"
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
