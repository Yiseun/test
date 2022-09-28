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
import NotInContents from "./NotInContents";
import Wrapper from "./Wrapper";
import StayItem from "./StayItem";

const StayLike = () => {
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
  // 렌트카 페이징
  const [page, setPage] = useState(1);
  const perPage = 8;
  const count = Math.ceil(stayList.length / perPage);
  const stayListsPerPage = usePagination(stayList, perPage);
  const handlePage = (e, p) => {
    setPage(p);
    stayListsPerPage.jump(p);
  };

  const navigate = useNavigate();
  function handleRoute(props) {
    navigate(`/${props}`);
  }

  function searchAllStay() {
    axios
      .get(BASE_URL + "/api/auth/v1/user/like/stay/list", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        setStayList(response.data);
        console.log(response.data);
      });
  }
  useEffect(() => {
    searchAllStay();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Header />

        <Box display="flex">
          <DashboardMyInfo page="STAY" />
          <Wrapper
            name="MY STAY LIKE"
            onClick={() => {
              handleRoute("search/stay");
            }}
          >
            <Box
              xs={{
                width: "10rem",
              }}
            >
              <Grid
                container
                sx={{
                  display: "flex",
                }}
              >
                {stayList.length === 0 ? (
                  <NotInContents>관광지가 없습니다.</NotInContents>
                ) : (
                  stayListsPerPage.currentData().map((stay) => (
                    <Grid
                      item
                      xs={4}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <StayItem key={stay.id} stay={stay} />
                    </Grid>
                  ))
                )}
              </Grid>
            </Box>
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

export default StayLike;
