import { CalendarMonth } from "@mui/icons-material";
import { format } from "date-fns";
import {
  Box,
  Button,
  Card,
  Container,
  createTheme,
  Divider,
  ListItem,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Calendar } from "react-date-range";
import CategoryBar from "../../components/CategoryBar";
import Header from "../../components/header/Header";
import { BASE_URL } from "../../baseUrl";
import Footer from "../../components/footer/Footer";

const SearchTrain = () => {
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

  // 출발지 도착지 검색어
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

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Header />
        <CategoryBar category="train" />
        <Box display="flex" justifyContent="center">
          <TextField
            size="small"
            placeholder="출발지"
            onChange={(e) => {
              setSearchStartPoint(e.target.value);
            }}
            margin="1px"
          />
          <TextField
            size="small"
            placeholder="도착지"
            onChange={(e) => {
              setSearchEndPoint(e.target.value);
            }}
            margin="1px"
          />
          {/* 달력 */}
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
            onClick={() => {
              searchTrain();
            }}
          >
            검색
          </Button>
        </Box>
        <Box maxWidth="50%" margin="5px" overflow="auto">
          {trainLists.length === 0 ? (
            <Box>출발지와 도착지를 입력해 기차를 검색해보세요!</Box>
          ) : (
            trainLists.map((trainList) => (
              <ListItem
                display="flex"
                justifyContent="space-between"
                key={trainList.trainId}
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
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default SearchTrain;
