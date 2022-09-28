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
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../baseUrl";
import DashboardMyInfo from "../../components/dashboardmyinfo/DashboardMyInfo";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import usePagination from "../../components/Pagination";
import AttractionItem from "./AttractionItem";
import NotInContents from "./NotInContents";
import Wrapper from "./Wrapper";

const AttractionLike = () => {
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

  const navigate = useNavigate();
  function handleRoute(props) {
    navigate(`/${props}`);
  }

  function searchAllAttraction() {
    axios
      .get(BASE_URL + "/api/auth/v1/user/like/attraction/list", {
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

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Header />

        <Box display="flex">
          <DashboardMyInfo page="ATTRACTION" />
          <Wrapper
            name="MY ATTRACTION LIKE"
            onClick={() => {
              handleRoute("search/attraction");
            }}
          >
            <Grid item xs={12}>
              <Grid container>
                {attractions.length === 0 ? (
                  <NotInContents>관광지가 없습니다.</NotInContents>
                ) : (
                  attractionListsPerPage.currentData().map((attraction) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <AttractionItem
                        key={attraction.attractionId}
                        attraction={attraction}
                      />
                    </Grid>
                  ))
                )}
              </Grid>
            </Grid>
          </Wrapper>
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
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default AttractionLike;
