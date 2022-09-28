import { Button, Container, Pagination, Stack } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../baseUrl";
import DashboardMyInfo from "../../components/dashboardmyinfo/DashboardMyInfo";
import Header from "../../components/header/Header";
import usePagination from "../../components/Pagination";
import Post from "../board/Post";
import PostColumn from "../board/PostColumn";
import PostListOutLine from "../board/PostListOutLine";
import PostSearch from "../board/PostSearch";

const MyPost = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const handlePosting = () => {
    {
      localStorage.getItem("token") == null
        ? navigate("/board")
        : navigate("/posting");
    }
  };

  function handlePostDetail(props) {
    navigate(`/post/${props}`, {
      state: {
        postId: props,
      },
    });
  }

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/auth/v1/post/user`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log("response ", response.data);
        setPosts(response.data);
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
  }, []);

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
    <Container maxWidth="lg">
      <Header />
      <Box display="flex">
        <DashboardMyInfo page="MY POST" />

        <PostListOutLine>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "40rem",
              paddingBottom: "1rem",
            }}
          ></Box>

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
              // postsPerPage
              //   .currentData()
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
  );
};

export default MyPost;
