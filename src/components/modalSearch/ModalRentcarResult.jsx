import {
  Box,
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
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../../baseUrl";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ModalRentcarResult = () => {
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

  // rentcar 리스트
  const [rentcarLists, setRentcarLists] = useState([]);

  // rentcar 전체 조회
  function searchRentcarAll() {
    axios
      .get(`${BASE_URL}/api/auth/v1/list/rentcar`, {
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

  // useEffect(() => {
  //   searchRentcarAll();
  // }, []);

  // rentcar 검색어
  const [searchWord, setSearchWord] = useState("");

  // rentcar 검색 조회
  function searchRentcar() {
    axios
      .get(`${BASE_URL}/api/filter/list/rentcar?search=${searchWord}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        setRentcarLists(response.data);
        console.log(rentcarLists);
      });
  }

  function listClick(rentcarList) {
    if (sessionStorage.getItem("rentcarData") === null) {
      sessionStorage.setItem("rentcarData", JSON.stringify([]));
    }
    let rentcarLi = JSON.parse(sessionStorage.getItem("rentcarData"));
    rentcarLi.push(rentcarList);
    sessionStorage.setItem("rentcarData", JSON.stringify(rentcarLi));
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
          message="렌트카 등록에 성공했습니다!"
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
              searchRentcarAll();
            }}
          >
            전체 조회
          </Button>
          <TextField
            placeholder="렌트카를 검색하세요"
            size="small"
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
          />
          <Button
            className="rentcarSearchButton"
            onClick={() => {
              searchRentcar();
            }}
          >
            검색
          </Button>
        </Box>
        <Box maxHeight="32vh" margin="5px" overflow="auto">
          {rentcarLists.length === 0 ? (
            <Box>렌트카가 없습니다.</Box>
          ) : (
            rentcarLists.map((rentcarList) => (
              <ListItem
                display="flex"
                justifyContent="space-between"
                key={rentcarList.rentCarId}
                onClick={() => {
                  listClick(rentcarList);
                  handleSnackbar();
                }}
              >
                <Box>
                  <Box display="flex" alignItems="center">
                    <Box display="flex" alignItems="center">
                      <Typography color="secondary" fontWeight="bold">
                        {rentcarList.companyName}
                      </Typography>
                      <Box display="flex" alignItems="center">
                        <Typography
                          marginLeft="5px"
                          fontWeight="bold"
                          color="info"
                        >
                          {rentcarList.carName}
                        </Typography>
                        <Typography marginLeft="5px">
                          {rentcarList.carSort}
                        </Typography>
                      </Box>
                      <Box display="flex" marginLeft="5px" alignItems="center">
                        <FavoriteIcon color="info" />
                        <Typography marginLeft="5px">
                          {rentcarList.likeCount}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Typography fontWeight="bold">주소</Typography>
                    <Typography margin="5px">{rentcarList.address}</Typography>
                  </Box>
                </Box>
              </ListItem>
            ))
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ModalRentcarResult;
