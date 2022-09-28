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
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import jwt_decode from "jwt-decode";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { BASE_URL } from "../../baseUrl";
import { useEffect } from "react";
import { makeOrderAttractionImg } from "../../image/attractionImg";
import Footer from "../../components/footer/Footer";

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

  const attractionPath = useLocation().pathname;
  const date = "2022.03.21";
  const [attractionName, setAttractionName] = useState("소울치킨의 집");
  const [attractionAddress, setAttractionAddress] = useState("광주광역시");
  const [attractionAddressDetail, setAttractionAddressDetail] =
    useState("상무역 3번 출구");
  const [attractionPrice, setAttractionPrice] = useState(1250);
  const [attractionLikeCount, setAttractionLikeCount] = useState(999);
  const [attractionId, setAttractionId] = useState(0);
  // 유저 token
  const userData = jwt_decode(localStorage.getItem("token"));

  // 관광지 좋아요
  const [likeClick, setLikeClick] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/auth/v1${attractionPath}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log(response.data);
        setAttractionName(response.data.name);
        setAttractionAddress(response.data.address);
        setAttractionAddressDetail(response.data.description);
        setAttractionPrice(response.data.price);
        setAttractionLikeCount(response.data.likeCount);
        setAttractionId(response.data.attractionId);
      })
      .catch(function (error) {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          console.log("첫번째 에러");
          console.log(error.response.data);
        } else if (error.request) {
          // 요청이 이루어 졌으나 응답을 받지 못했습니다.
          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          // Node.js의 http.ClientRequest 인스턴스입니다.
          console.log("두번째 에러");
          console.log(error.request);
        } else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
          console.log("세번째 에러");
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }, []);

  function handleLikeClick() {
    axios
      .get(BASE_URL + "/api/auth/v1/like/click/attraction", {
        params: {
          user: userData.id,
          attraction: attractionId,
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
        <Container maxWidth="lg">
          <Box
            sx={{
              padding: "50px",
              paddingTop: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid container>
              <Grid xs={1}></Grid>

              <Grid item xs={3}>
                <LeftSide
                  date={date}
                  attractionName={attractionName}
                  attractionPrice={attractionPrice}
                  attractionAddress={attractionAddress}
                  imgUrl={makeOrderAttractionImg(attractionId)}
                />
              </Grid>
              <Grid xs={0.2}></Grid>

              <Grid item xs={6.8}>
                <RightSide
                  attractionName={attractionName}
                  attractionPrice={attractionPrice}
                  attractionAddress={attractionAddress}
                  attractionAddressDetail={attractionAddressDetail}
                  attractionLikeCount={attractionLikeCount}
                  setAttractionLikeCount={setAttractionLikeCount}
                  handleLikeClick={handleLikeClick}
                  likeClick={likeClick}
                  imgUrl={makeOrderAttractionImg(attractionId)}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default AttractionDetail;
