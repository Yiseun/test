import {
  Box,
  Button,
  Card,
  Container,
  createTheme,
  Divider,
  ListItem,
  Snackbar,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "react-date-range";
import { BASE_URL } from "../../baseUrl";

const ModalTrainResult = () => {
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

  // train 리스트
  const [trainLists, setTrainLists] = useState([]);

  // train 출발지, 도착지
  const [searchStartPoint, setSearchStartPoint] = useState("");
  const [searchEndPoint, setSearchEndPoint] = useState("");

  // 날짜 (기본값 오늘)
  const [date, setDate] = useState(new Date());
  // 달력 열기
  const [openCal, setOpenCal] = useState(false);
  const handleCalendar = () => {
    setOpenCal(!openCal);
  };

  // train 검색 조회
  function searchTrain() {
    axios
      .get(
        `${BASE_URL}/api/auth/v1/list/trainapi?date=${format(
          date,
          "yyyyMMdd"
        )}&end=${searchEndPoint}&start=${searchStartPoint}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        setTrainLists(response.data.response.body.items.item);
      })
      .then(() => {
        {
          openCal === true ? handleCalendar() : setOpenCal(false);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  function listClick(trainList) {
    if (sessionStorage.getItem("trainData") === null) {
      sessionStorage.setItem("trainData", JSON.stringify([]));
    }

    let trainLi = JSON.parse(sessionStorage.getItem("trainData"));
    trainLi.push(trainList);
    sessionStorage.setItem("trainData", JSON.stringify(trainLi));
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
          message="기차 등록에 성공했습니다!"
          key={vertical + horizontal}
        />
        <Box
          className="modalSearch"
          display={{ lg: "flex", md: "row" }}
          justifyContent="center"
          alignItems="center"
          margin="3px"
        >
          <TextField
            placeholder="출발지를 검색하세요"
            size="small"
            onChange={(e) => {
              setSearchStartPoint(e.target.value);
            }}
            margin="1px"
          />
          <TextField
            placeholder="도착지를 검색하세요"
            size="small"
            onChange={(e) => {
              setSearchEndPoint(e.target.value);
            }}
            margin="1px"
          />
          <Box>
            <Card
              onClick={() => {
                handleCalendar();
              }}
            >
              <Typography margin="4px">
                {`${format(date, "yyyy/MM/dd")}`}
              </Typography>
            </Card>
            <Box position="absolute">
              {openCal && (
                <Calendar
                  onChange={(item) => {
                    setDate(item);
                    handleCalendar();
                  }}
                  date={date}
                  dateDisplayFormat={"yyyy.mm.dd"}
                />
              )}
            </Box>
          </Box>
          <Button
            className="trainSearchButton"
            onClick={() => {
              searchTrain();
            }}
          >
            검색
          </Button>
        </Box>
        <Box maxHeight="32vh" margin="5px" overflow="auto">
          {trainLists.length === 0 ? (
            <Box>출발지와 도착지를 입력해 기차를 검색해보세요!</Box>
          ) : (
            trainLists.map((trainList) => (
              <ListItem
                display="flex"
                justifyContent="space-between"
                key={trainList.trainId}
                onClick={() => {
                  listClick(trainList);
                  handleSnackbar();
                }}
              >
                <Box display="flex" alignItems="center">
                  <Box alignItems="center" justifyContent="center">
                    <Typography>출발지</Typography>
                    <Typography
                      fontWeight="bold"
                      color="primary"
                      justifyContent="center"
                    >
                      {trainList.depplacename}
                    </Typography>
                  </Box>
                  <Typography margin="0 5px 0 5px">---›</Typography>
                  <Box alignItems="center" justifyContent="center">
                    <Typography>도착지</Typography>
                    <Typography fontWeight="bold" color="primary">
                      {trainList.arrplacename}
                    </Typography>
                  </Box>
                  <Divider variant="middle" />
                  <Box alignItems="center" justifyContent="center">
                    <Typography>출발시각</Typography>
                    <Typography fontWeight="bold">
                      {trainList.depplandtime}
                    </Typography>
                  </Box>
                  <Typography margin="0 5px 0 5px">---›</Typography>
                  <Box alignItems="center" justifyContent="center">
                    <Typography>도착시각</Typography>
                    <Typography fontWeight="bold">
                      {trainList.arrplandtime}
                    </Typography>
                  </Box>
                  <Divider variant="middle" />
                  <Box alignItems="center" justifyContent="center">
                    <Typography>요금</Typography>
                    <Typography fontWeight="bold" color="secondary">
                      {trainList.adultcharge}
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

export default ModalTrainResult;
