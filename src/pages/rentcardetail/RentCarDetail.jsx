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
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import { BASE_URL } from "../../baseUrl";
import { useEffect } from "react";
import { makeOrderCarImg } from "../../image/carImg";

const RentCarDetail = () => {
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

  const rentcarPath = useLocation().pathname;

  const imgUrl =
    "http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg";

  const [rentCarId, setRentCarId] = useState(0);
  const [address, setAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [carSort, setCarSort] = useState("");
  const [carName, setCarName] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  // 유저 token
  const userData = jwt_decode(localStorage.getItem("token"));

  // 렌트카 좋아요
  const [likeClick, setLikeClick] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/auth/v1${rentcarPath}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log(response.data);
        setRentCarId(response.data.rentCarId);
        setAddress(response.data.address);
        setCompanyName(response.data.companyName);
        setCarSort(response.data.carSort);
        setCarName(response.data.carName);
        setLikeCount(response.data.likeCount);
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
      .get(BASE_URL + "/api/auth/v1/like/click/rentcar", {
        params: {
          user: userData.id,
          rentcar: rentCarId,
        },
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
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
                  imgUrl={makeOrderCarImg(rentCarId, 10)}
                  carSort={carSort}
                  carName={carName}
                />
              </Grid>
              <Grid xs={0.2}></Grid>

              <Grid xs={6.8}>
                <RightSide
                  imgUrl={makeOrderCarImg(rentCarId, 10)}
                  address={address}
                  companyName={companyName}
                  carSort={carSort}
                  carName={carName}
                  likeClick={likeClick}
                  likeCount={likeCount}
                  setLikeCount={setLikeCount}
                  handleLikeClick={handleLikeClick}
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

export default RentCarDetail;
