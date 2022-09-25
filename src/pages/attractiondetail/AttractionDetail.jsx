import {
  Box,
  Container,
  createTheme,
  Divider,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import axios from "axios";
import { useState } from "react";
import Header from "../../components/header/Header";
import jwt_decode from "jwt-decode";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { BASE_URL } from "../../baseUrl";

const AttractionDetail = () => {
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#52057B",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#BC6FF1",
      },
      info: {
        main: "#892CDC",
      },
    },
  });
  const date = "2022.03.21";
  const imgUrl =
    "http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg";
  const [attractionName, setAttractionName] = useState("소울치킨의 집");
  const [attractionAddress, setAttractionAddress] = useState("광주광역시");
  const [attractionAddressDetail, setAttractionAddressDetail] =
    useState("상무역 3번 출구");
  const [attractionPrice, setAttractionPrice] = useState(1250);
  const [attractionLikeCount, setAttractionLikeCount] = useState(999);

  // 유저 token
  const userData = jwt_decode(localStorage.getItem("token"));

  // 관광지 좋아요
  const [likeClick, setLikeClick] = useState(false);

  function handleLikeClick() {
    axios
      .get(BASE_URL + "/api/auth/v1/like/click/attraction", {
        params: {
          user: userData.id,
          attraction: 1,
        },
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        setLikeClick(!likeClick);
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Header />
        <Box className="attractionContainer">
          <Grid container columns={{ xs: 12 }}>
            <Grid item xs={12} sm={8}>
              <div className="attractionTopContainer">
                {/* 관광지 옆 글자나 숫자를 클릭하면 해당 관광지역을 검색한 화면으로 */}
                <Box className="attractionBoard" display="flex">
                  관광지 ›{" "}
                  <Typography color="info" fontWeight="bold">
                    {attractionAddress}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" fontWeight="bold">
                    {attractionName}
                  </Typography>
                </Box>
                <Box className="attractionTitleFooter">
                  <Box className="attractionLikeCount" display="flex">
                    <span onClick={handleLikeClick}>
                      {likeClick ? (
                        <FavoriteIcon
                          color="info"
                          onClick={() => {
                            setAttractionLikeCount(attractionLikeCount - 1);
                          }}
                        />
                      ) : (
                        <FavoriteBorderIcon
                          color="info"
                          onClick={() => {
                            setAttractionLikeCount(attractionLikeCount + 1);
                          }}
                        />
                      )}
                    </span>
                    <Typography>{attractionLikeCount}</Typography>
                  </Box>
                </Box>
              </div>
              <Divider />

              {/* 전반부 */}
              <Box className="attractionDetail">
                <br />
                관광지 이름: {attractionName}
                <br />
                관광지 주소: {attractionAddress}
                <br />
                관광지 상세주소: {attractionAddressDetail}
                <br />
                관광지 좋아요: {attractionLikeCount}
                <br />
                관광지 가격: {attractionPrice}
              </Box>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="recommendAttractionContainer">추천 관광지</div>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* 여기부터 제작 */}
      <Grid container>
        <Grid item xs={5}>
          <LeftSide
            date={date}
            attractionName={attractionName}
            attractionPrice={attractionPrice}
            attractionAddress={attractionAddress}
          />
        </Grid>
        <Grid item xs={7}>
          <RightSide
            attractionName={attractionName}
            attractionPrice={attractionPrice}
            attractionAddress={attractionAddress}
            attractionAddressDetail={attractionAddressDetail}
            attractionLikeCount={attractionLikeCount}
            setAttractionLikeCount={setAttractionLikeCount}
            handleLikeClick={handleLikeClick}
            likeClick={likeClick}
            imgUrl={imgUrl}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default AttractionDetail;
