import {
  Box,
  Button,
  Card,
  Container,
  createTheme,
  Grid,
  ListItem,
  Pagination,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../../baseUrl";
import CategoryBar from "../../components/CategoryBar";
import Header from "../../components/header/Header";
import usePagination from "../../components/Pagination";
import RentCarItem from "./RentCarItem";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const SearchRentcar = () => {
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

  // 렌트카 리스트
  const [rentcarLists, setRentcarLists] = useState([]);

  // 렌트카 검색어
  const [searchRentcar, setSearchRentcar] = useState("");

  function searchAllRentcar() {
    axios
      .get(BASE_URL + "/api/auth/v1/list/rentcar", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        setRentcarLists(response.data);
        console.log(rentcarLists);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  function searchFilterRentCar() {
    axios
      .get(`${BASE_URL}/api/filter/list/rentcar?search=${searchRentcar}`)
      .then((response) => {
        setRentcarLists(response.data);
        console.log(rentcarLists);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }

  useEffect(() => {
    searchAllRentcar();
  }, []);

  // 렌트카 페이징
  const [page, setPage] = useState(1);
  const perPage = 8;
  const count = Math.ceil(rentcarLists.length / perPage);
  const rentcarListsPerPage = usePagination(rentcarLists, perPage);

  const handlePage = (e, p) => {
    setPage(p);
    rentcarListsPerPage.jump(p);
  };

  const navigate = useNavigate();

  const handleRoute = (props) => {
    navigate(`/${props}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Header />
        <CategoryBar category="rentcar" />
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
              setSearchRentcar(e.target.value);
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
            onClick={searchFilterRentCar}
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
              {rentcarLists.length === 0 ? (
                <Card>렌트카가 없습니다.</Card>
              ) : (
                rentcarListsPerPage.currentData().map((rentcar) => (
                  <Grid item xs={3}>
                    <RentCarItem handleRoute={handleRoute} rentcar={rentcar} />{" "}
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

export default SearchRentcar;
