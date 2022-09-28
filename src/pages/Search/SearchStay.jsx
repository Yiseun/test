import {
  Button,
  Card,
  Container,
  createTheme,
  Grid,
  Pagination,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import axios from "axios";
import React from "react";
import { Search } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../baseUrl";
import CategoryBar from "../../components/CategoryBar";
import Header from "../../components/header/Header";
import usePagination from "../../components/Pagination";
import StayItem from "./StayItem";
import Footer from "../../components/footer/Footer";

const SearchStay = () => {
  const theme = createTheme({
    palette: {
      primary: {
        // 가장 어두운 보라
        main: "#52057B",
      },
      secondary: {
        // 가장 밝은 보라
        main: "#BC6FF1",
      },
      info: {
        // 중간 보라
        main: "#892CDC",
      },
    },
  });

  const [stayList, setStayList] = useState([]);

  // 검색어
  const [searchStay, setSearchStay] = useState("");

  function searchAllStay() {
    axios
      .get(BASE_URL + "/api/auth/v1/list/stay", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        setStayList(response.data);
        console.log(stayList);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  function searchFilterStay() {
    axios
      .get(`${BASE_URL}/api/filter/list/stay?search=${searchStay}`)
      .then((response) => {
        setStayList(response.data);
        console.log(stayList);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }

  useEffect(() => {
    searchAllStay();
  }, []);

  // 페이징
  const [page, setPage] = useState(1);
  const perPage = 8;
  const count = Math.ceil(stayList.length / perPage);
  const stayListPerPage = usePagination(stayList, perPage);

  const handlePage = (e, p) => {
    setPage(p);
    stayListPerPage.jump(p);
  };

  const navigate = useNavigate();

  const handleRoute = (props) => {
    navigate(`/${props}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Header />
        <CategoryBar category="stay" />
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{
            padding: "0.5rem",
          }}
        >
          <TextField
            id="outlined-검색"
            color="secondary"
            borderRadius="2rem"
            label="검색"
            focused
            sx={{
              margin: "3px",
              borderColor: "#892CDC",
              borderRadius: "10rem",
            }}
            onChange={(e) => {
              setSearchStay(e.target.value);
            }}
          />

          <Button
            variant="text"
            color="secondary"
            className="postSearchButton"
            padding="0"
            sx={{
              borderWidth: 3,
              borderRadius: "5rem",
            }}
            onClick={searchFilterStay}
          >
            <Search />
          </Button>
        </Stack>
        <Box>
          <Box
            xs={{
              width: "10rem",
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingLeft: "7rem",
                paddingRight: "7rem",
              }}
            >
              {stayList.length === 0 ? (
                <Card>렌트카가 없습니다.</Card>
              ) : (
                stayListPerPage.currentData().map((stay) => (
                  <Grid item xs={3}>
                    <StayItem handleRoute={handleRoute} stay={stay} />{" "}
                  </Grid>
                ))
              )}
            </Grid>
          </Box>
        </Box>
        <Stack>
          <Pagination
            size="small"
            count={count}
            boundaryCount={2}
            onChange={handlePage}
            sx={{
              margin: "auto",
            }}
          />
        </Stack>
      </Container>
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default SearchStay;
