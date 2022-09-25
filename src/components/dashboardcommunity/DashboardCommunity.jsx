import { Box, Card, Divider, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "./Wrapper";
import DashboardDetail from "./DashboardDetail";
import { BASE_URL } from "../../baseUrl";

const regionAndCitiesList = [
  { region: "강원도1", citiList: ["속초", "강릉", "양양", "원주"] },
  { region: "강원도2", citiList: ["속초", "강릉", "양양", "원주"] },
  { region: "강원도3", citiList: ["속초", "강릉", "양양", "원주"] },
  { region: "강원도4", citiList: ["속초", "강릉", "양양", "원주"] },
];

const DashboardCommunity = () => {
  const navigate = useNavigate();

  function handler(props) {
    navigate(`/board/${props}`);
  }

  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/board")
      .then((response) => {
        console.log("게시판데이터");
        setBoardData(response.data);
        console.log(boardData);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("마지막");
    console.log(boardData);
  }, []);

  return (
    <Box sx={{ padding: "10px" }}>
      <Box className="dashboardWrapper">
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          <MenuIcon />
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "block" },

            minWidth: "200px",
            padding: "20px 10px 20px 40px",
          }}
        >
          <Stack>
            <Typography>지역 게시판</Typography>
          </Stack>
          <Divider />
          <Stack>
            <Box border="none">
              <Typography>인기💜게시판</Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ px: 2, py: 1 }}
                spacing={0.5}
              >
                {boardData.map((board, i) => (
                  <Typography
                    onClick={() => {
                      handler(board.boardId);
                    }}
                  >
                    {board.boardTitle}
                  </Typography>
                ))}
              </Stack>
            </Box>
            <Card>
              <Typography>강원도</Typography>
              <Typography>속초</Typography>
              <Typography>양양</Typography>
              <Typography>춘천</Typography>
              <Typography>강릉</Typography>
            </Card>
            <Card>
              <Typography>충청도</Typography>
              <Typography>대전</Typography>
              <Typography>충주</Typography>
              <Typography>천안</Typography>
              <Typography>공주</Typography>
            </Card>
            <Card>
              <Typography>경상도</Typography>
              <Typography>대구</Typography>
              <Typography>부산</Typography>
              <Typography>경주</Typography>
              <Typography>안동</Typography>
              <Typography>진주</Typography>
            </Card>
            <Card>
              <Typography>전라도</Typography>
              <Typography>전주</Typography>
              <Typography>광주</Typography>
              <Typography>군산</Typography>
              <Typography>해남</Typography>
              <Typography>여수</Typography>
            </Card>
            <Card>
              <Typography>제주도</Typography>
            </Card>
          </Stack>
        </Box>
      </Box>

      <Wrapper>
        {regionAndCitiesList.map((regionAndCities) => {
          return <DashboardDetail regionAndCities={regionAndCities} />;
        })}
      </Wrapper>
    </Box>
  );
};

export default DashboardCommunity;
