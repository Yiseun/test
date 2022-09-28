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
import { useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import { BASE_URL } from "../../baseUrl";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { makeOrderStayImg } from "../../image/stayImg";

const StayDetail = () => {
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

  const imgUrl =
    "http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg";
  const [stayAddress, setStayAddress] = useState("경기도 양평군 어쩌고");
  const [stayCheckin, setStayCheckIn] = useState("14:00");
  const [stayCheckOut, setStayCheckOut] = useState("10:00");
  const [stayLikeCount, setStayLikeCount] = useState(5);
  const [stayName, setStayName] = useState("양평 블루밍펜션");
  const [stayPrice, setStayPrice] = useState(500);
  const [stayId, setStayId] = useState(0);
  // 유저 token
  const userData = jwt_decode(localStorage.getItem("token"));

  // 숙소 좋아요
  const [likeClick, setLikeClick] = useState(false);
  const stayPath = useLocation().pathname;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/auth/v1${stayPath}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log(response.data);
        setStayAddress(response.data.address);
        setStayCheckIn(response.data.checkIn);
        setStayCheckOut(response.data.checkOut);
        setStayLikeCount(response.data.likeCount);
        setStayName(response.data.name);
        setStayPrice(response.data.price);
        setStayId(response.data.id);
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
      .get(BASE_URL + "/api/auth/v1/like/click/stay", {
        params: {
          user: userData.id,
          stay: stayId,
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
              <Grid xs={3}>
                <LeftSide
                  imgUrl={makeOrderStayImg(stayId)}
                  stayPrice={stayPrice}
                  stayName={stayName}
                />
              </Grid>
              <Grid xs={0.2}></Grid>

              <Grid xs={6.8}>
                <RightSide
                  stayAddress={stayAddress}
                  stayLikeCount={stayLikeCount}
                  stayName={stayName}
                  stayPrice={stayPrice}
                  setStayLikeCount={stayLikeCount}
                  handleLikeClick={handleLikeClick}
                  likeClick={likeClick}
                  stayCheckin={stayCheckin}
                  stayCheckOut={stayCheckOut}
                  imgUrl={makeOrderStayImg(stayId)}
                />
              </Grid>
              <Grid xs={1}></Grid>
            </Grid>
          </Box>
        </Container>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default StayDetail;
