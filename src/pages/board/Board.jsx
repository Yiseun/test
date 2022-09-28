import {
  Button,
  Box,
  Container,
  InputAdornment,
  Pagination,
  Stack,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BoardCategory from "../../components/boardcategory/BoardCategory";
import "./board.css";
import Notice from "../../components/Notice/Notice";
import Header from "../../components/header/Header";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import DashboardCommunity from "../../components/dashboardcommunity/DashboardCommunity";
import usePagination from "../../components/Pagination";
import Post from "../userprofile/Post";
import PostListOutLine from "./PostListOutLine";
import PostColumn from "./PostColumn";
import PostSearch from "./PostSearch";
import { BASE_URL } from "../../baseUrl";

const Community = () => {
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

  //navigate
  const navigate = useNavigate();

  // handlePosting
  function handlePosting(boardId) {
    {
      localStorage.getItem("token") == null
        ? navigate("/board")
        : navigate("/posting", {
            state: {
              boardId: boardId,
            },
          });
    }
  }

  // 게시글 전체 가져오기

  const [posts, setPosts] = useState([]);

  function postsAllBoard() {
    axios
      .get(`${BASE_URL}/api/post`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log(response.data);
        setPosts(response.data.reverse());
      })
      .catch(function (error) {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          console.log("첫번째 에러");
          console.log(error.response.data);
        } else if (error.request) {
          // 요청이 이루어 졌으나 응답을 받지 못했습니다.
          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          // Node.js의 http.ClientRequest 인스턴스입니다.
          console.log("두번째 에러");
          console.log(error.request);
        } else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
          console.log("세번째 에러");
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  // 게시판에 맞는 게시글만 가져오기
  async function postsByBoard(props) {
    axios
      .get(`${BASE_URL}/api/auth/v1/board/${props}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log(response.data);
        const tmpData = response.data.postDTOList;

        Promise.all(
          tmpData.map(async (post) => {
            return await axios.get(`${BASE_URL}/api/auth/v1/post/${post}`, {
              headers: {
                Authorization: `${localStorage.getItem("token")}`,
                "Content-Type": "application/json; charset=UTF-8",
              },
            });
          })
        ).then((res) => {
          console.log(res);
          const tmpArray = res.map((postdata) => postdata.data);

          setPosts(tmpArray.reverse());
          console.log(posts);
        });
      });
  }

  useEffect((props) => {
    postsByBoard(props);
  }, []);

  function handleBoard(props) {
    postsByBoard(props);
  }

  const [boardId, setBoardId] = useState(2);

  // useLocation 으로 postDetail 에 보내기.
  function handlePostDetail(props) {
    navigate(`/post/${props}`, {
      state: {
        postId: props,
      },
    });
  }

  // 게시글 페이징
  const [page, setPage] = useState(1);
  const perPage = 10;
  const count = Math.ceil(posts.length / perPage);
  const postsPerPage = usePagination(posts, perPage);

  const handlePage = (e, p) => {
    setPage(p);
    postsPerPage.jump(p);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Header />
        <Box display="flex">
          <DashboardCommunity
            handleBoard={() => {
              handleBoard(boardId);
            }}
            setBoardId={setBoardId}
          />
          <PostListOutLine>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "40rem",
                paddingBottom: "1rem",
              }}
            >
              <PostSearch boardId={boardId} setPosts={setPosts} />
              <Button
                variant="none"
                className="communityPostingButton"
                onClick={() => {
                  handlePosting(boardId);
                }}
                sx={{ margin: "3px", color: "#892CDC", borderRadius: "1rem" }}
              >
                글쓰기
              </Button>
            </Box>

            <div className="communityBoard">
              <PostColumn />
              {/* <Notice/> */}
              {posts.length === 0 ? (
                <Box padding="10px">"첫 게시글을 작성해보세요!"</Box>
              ) : (
                postsPerPage
                  .currentData()
                  .map((post) => (
                    <Post post={post} handlePostDetail={handlePostDetail} />
                  ))
              )}
            </div>
            <div className="boardFooter">
              <Stack spacing={2} padding="5px">
                <Pagination
                  size="small"
                  count={count}
                  boundaryCount={2}
                  onChange={handlePage}
                />
              </Stack>
            </div>
          </PostListOutLine>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Community;
