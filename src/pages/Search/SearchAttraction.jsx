import {
  Box,
  Button,
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
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../../baseUrl";
import CategoryBar from "../../components/CategoryBar";
import Header from "../../components/header/Header";
import AttractionItem from "./AttractionItem";
import Bar from "./Bar";
import AttractionColumn from "./Column/AttractionColumn";
import NotInContents from "./NotInContents";
import usePagination from "../../components/Pagination";
import Footer from "../../components/footer/Footer";

const SearchAttraction = () => {
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

  const [attractions, setAttractions] = useState([]);
  // 렌트카 페이징
  const [page, setPage] = useState(1);
  const perPage = 8;
  const count = Math.ceil(attractions.length / perPage);
  const attractionListsPerPage = usePagination(attractions, perPage);
  const handlePage = (e, p) => {
    setPage(p);
    attractionListsPerPage.jump(p);
  };
  function searchAllAttraction() {
    axios
      .get(BASE_URL + "/api/auth/v1/list/attraction", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        setAttractions(response.data);
        console.log(response.data);
      });
  }

  useEffect(() => {
    searchAllAttraction();
  }, []);

  // 검색어
  const [searchAttraction, setSearchAttraction] = useState("");

  function searchFilterAttraction() {
    axios
      .get(`${BASE_URL}/api/filter/list/attraction?search=${searchAttraction}`)
      .then((response) => {
        setAttractions(response.data);
        console.log(searchAttraction);
      })
      .catch(function (error) {
        console.log(error.response);
        console.log(searchAttraction);
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Header />
        <CategoryBar category="attraction" />

        <Bar
          setSearchAttraction={setSearchAttraction}
          searchFilterAttraction={searchFilterAttraction}
        />

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
              {attractions.length === 0 ? (
                <NotInContents>관광지가 없습니다.</NotInContents>
              ) : (
                attractionListsPerPage.currentData().map((attraction) => (
                  <Grid item xs={3}>
                    <AttractionItem
                      key={attraction.attractionId}
                      attraction={attraction}
                    />
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

export default SearchAttraction;
