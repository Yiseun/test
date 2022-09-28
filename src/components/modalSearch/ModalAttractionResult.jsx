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

const ModalAttractionResult = () => {
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

  // attraction 리스트
  const [attractionLists, setAttractionLists] = useState([]);

  // attraction 전체 조회
  function searchAttractionAll() {
    axios
      .get(`${BASE_URL}/api/auth/v1/list/attraction`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        setAttractionLists(response.data);
        console.log(attractionLists);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  // useEffect(() => {
  //   searchAttractionAll();
  // }, []);

  // attraction 검색어
  const [searchWord, setSearchWord] = useState("");

  // attraction 검색 조회
  function searchAttraction() {
    axios
      .get(`${BASE_URL}/api/filter/list/attraction?search=${searchWord}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        setAttractionLists(response.data);
        console.log(attractionLists);
      });
  }

  function listClick(attractionList) {
    if (sessionStorage.getItem("attractionData") === null) {
      sessionStorage.setItem("attractionData", JSON.stringify([]));
    }

    let attractionLi = JSON.parse(sessionStorage.getItem("attractionData"));
    attractionLi.push(attractionList);
    sessionStorage.setItem("attractionData", JSON.stringify(attractionLi));
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
          message="관광지 등록에 성공했습니다!"
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
              searchAttractionAll();
            }}
          >
            전체 조회
          </Button>
          <TextField
            placeholder="관광지를 검색하세요"
            size="small"
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
          />
          <Button
            className="attractionSearchButton"
            onClick={() => {
              searchAttraction();
            }}
          >
            검색
          </Button>
        </Box>
        <Box maxHeight="32vh" margin="5px" overflow="auto">
          {attractionLists.length === 0 ? (
            <Box>관광지가 없습니다.</Box>
          ) : (
            attractionLists.map((attractionList) => (
              <ListItem
                display="flex"
                justifyContent="space-between"
                key={attractionList.attractionId}
                onClick={() => {
                  listClick(attractionList);
                  handleSnackbar();
                }}
              >
                <Box alignItems="center">
                  <Box display="flex" alignItems="center">
                    <Typography color="secondary" fontWeight="bold">
                      {attractionList.name}
                    </Typography>
                    <Box display="flex" marginLeft="5px">
                      <FavoriteIcon color="info" />
                      <Typography marginLeft="5px">
                        {attractionList.likeCount}
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex">
                    <Typography fontWeight="bold">설명 : </Typography>
                    <Typography marginLeft="5px">
                      {attractionList.description}
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <Typography fontWeight="bold">주소 : </Typography>
                    <Typography marginLeft="5px">
                      {attractionList.address}
                    </Typography>
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

export default ModalAttractionResult;
