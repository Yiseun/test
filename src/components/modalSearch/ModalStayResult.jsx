import {
  Button,
  Container,
  createTheme,
  Divider,
  ListItem,
  Snackbar,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../baseUrl";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ModalStayResult = () => {
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

  // stay 리스트
  const [stayLists, setStayLists] = useState([]);

  // stay 전체 조회
  function searchStayAll() {
    axios
      .get(`${BASE_URL}/api/auth/v1/list/stay`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        setStayLists(response.data);
        console.log(stayLists);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  // useEffect(() => {
  //   searchStayAll();
  // }, []);

  // stay 검색어
  const [searchWord, setSearchWord] = useState("");
  // stay 검색 조회
  function searchStay() {
    axios
      .get(`${BASE_URL}/api/auth/v1/filter/list/stay?search=${searchWord}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        setStayLists(response.data);
        console.log(stayLists);
      });
  }

  function listClick(stayList) {
    if (sessionStorage.getItem("stayData") === null) {
      sessionStorage.setItem("stayData", JSON.stringify([]));
    }

    let stayLi = JSON.parse(sessionStorage.getItem("stayData"));
    stayLi.push(stayList);
    sessionStorage.setItem("stayData", JSON.stringify(stayLi));
  }

  // snackbar
  const [stateSnackbar, setStateSnackbar] = React.useState({
    openSnackbar: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, openSnackbar } = stateSnackbar;
  const handleSnackbar = () => {
    setStateSnackbar({ ...stateSnackbar, openSnackbar: !openSnackbar });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Snackbar
          color="secondary"
          anchorOrigin={{ vertical, horizontal }}
          open={openSnackbar}
          onClose={handleSnackbar}
          message="숙소 등록에 성공했습니다!"
          key={vertical + horizontal}
        />
        <Box
          className="modalSearch"
          display="flex"
          justifyContent="center"
          margin="3px"
        >
          <Button
            onClick={() => {
              searchStayAll();
            }}
          >
            전체 조회
          </Button>
          <TextField
            placeholder="숙소를 검색하세요"
            size="small"
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
          />
          <Button
            className="staySearchButton"
            onClick={() => {
              searchStay();
            }}
          >
            검색
          </Button>
        </Box>
        <Box
          maxHeight="32vh"
          margin="5px"
          overflow="auto"
          border="1px"
          borderColor="secondary"
        >
          {stayLists.length === 0 ? (
            <Box>숙소가 없습니다.</Box>
          ) : (
            stayLists.map((stayList) => (
              <ListItem
                display="flex"
                justifyContent="space-between"
                key={stayList.stayId}
                onClick={() => {
                  listClick(stayList);
                  handleSnackbar();
                }}
              >
                <Box alignItems="center">
                  <Box display="flex" alignItems="center">
                    <Typography color="secondary" fontWeight="bold">
                      {stayList.name}
                    </Typography>
                    <Box display="flex" marginLeft="5px">
                      <FavoriteIcon color="info" />
                      <Typography>{stayList.likeCount}</Typography>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Typography fontWeight="bold">주소 : </Typography>
                    <Typography marginLeft="5px">{stayList.address}</Typography>
                  </Box>
                </Box>
                <Divider />
              </ListItem>
            ))
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ModalStayResult;
