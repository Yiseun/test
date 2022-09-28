import { Box, Card, Divider, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "./Wrapper";
import DashboardDetail from "./DashboardDetail";
import { BASE_URL } from "../../baseUrl";

const DashboardCommunity = ({ handleBoard, setBoardId }) => {
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/board`)
      .then((response) => {
        console.log("게시판데이터");
        console.log(response.data);
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
      <Wrapper>
        <Box>
          <Typography fontWeight="bold" margin="3px">
            서울 / 경기
          </Typography>
          <Box display="flex">
            {boardData.map((board) =>
              board.boardId <= 4 ? (
                <DashboardDetail
                  handleBoard={handleBoard}
                  city={board}
                  setBoardId={setBoardId}
                />
              ) : (
                <></>
              )
            )}
          </Box>
          <Typography fontWeight="bold" margin="3px">
            강원도
          </Typography>
          <Box display="flex">
            {boardData.map((board) =>
              board.boardId > 4 && board.boardId <= 8 ? (
                <DashboardDetail
                  handleBoard={handleBoard}
                  city={board}
                  setBoardId={setBoardId}
                />
              ) : (
                <></>
              )
            )}
          </Box>
          <Typography fontWeight="bold" margin="3px">
            광주 / 전남
          </Typography>
          <Box display="flex">
            {boardData.map((board) =>
              board.boardId > 8 && board.boardId <= 12 ? (
                <DashboardDetail
                  handleBoard={handleBoard}
                  city={board}
                  setBoardId={setBoardId}
                />
              ) : (
                <></>
              )
            )}
          </Box>
          <Typography fontWeight="bold" margin="3px">
            대구 / 경북
          </Typography>
          <Box display="flex">
            {boardData.map((board) =>
              board.boardId > 12 && board.boardId <= 16 ? (
                <DashboardDetail
                  handleBoard={handleBoard}
                  city={board}
                  setBoardId={setBoardId}
                />
              ) : (
                <></>
              )
            )}
          </Box>
          <Typography fontWeight="bold" margin="3px">
            부산 / 경남
          </Typography>
          <Box display="flex">
            {boardData.map((board) =>
              board.boardId > 16 && board.boardId <= 20 ? (
                <DashboardDetail
                  handleBoard={handleBoard}
                  city={board}
                  setBoardId={setBoardId}
                />
              ) : (
                <></>
              )
            )}
          </Box>
          <Typography fontWeight="bold" margin="3px">
            전주 / 전북
          </Typography>
          <Box display="flex">
            {boardData.map((board) =>
              board.boardId > 20 && board.boardId <= 24 ? (
                <DashboardDetail
                  handleBoard={handleBoard}
                  city={board}
                  setBoardId={setBoardId}
                />
              ) : (
                <></>
              )
            )}
          </Box>
          <Typography fontWeight="bold" margin="3px">
            충청도
          </Typography>
          <Box display="flex">
            {boardData.map((board) =>
              board.boardId > 24 && board.boardId <= 28 ? (
                <DashboardDetail
                  handleBoard={handleBoard}
                  city={board}
                  setBoardId={setBoardId}
                />
              ) : (
                <></>
              )
            )}
          </Box>
          <Box display="flex">
            {boardData.map((board) =>
              board.boardId > 28 && board.boardId <= 32 ? (
                <DashboardDetail
                  handleBoard={handleBoard}
                  city={board}
                  setBoardId={setBoardId}
                />
              ) : (
                <></>
              )
            )}
          </Box>
          <Typography fontWeight="bold" margin="3px">
            제주도
          </Typography>
          <Box display="flex">
            {boardData.map((board) =>
              board.boardId > 32 ? (
                <DashboardDetail
                  handleBoard={handleBoard}
                  city={board}
                  setBoardId={setBoardId}
                />
              ) : (
                <></>
              )
            )}
          </Box>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default DashboardCommunity;
