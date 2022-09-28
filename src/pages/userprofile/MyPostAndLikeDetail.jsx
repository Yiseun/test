import {
  Box,
  Button,
  Container,
  createTheme,
  Divider,
  Grid,
  Pagination,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { BASE_URL } from "../../baseUrl";
import DashboardMyInfo from "../../components/dashboardmyinfo/DashboardMyInfo";
import Header from "../../components/header/Header";
import { useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import PostColumn from "../board/PostColumn";
import PostListOutLine from "../board/PostListOutLine";
import PostSearch from "../board/PostSearch";
import usePagination from "../../components/Pagination";
import Post from "./Post";

const MyPostAndLikeDetail = () => {
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#52057B",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#BC6FF1",
      },
      info: {
        main: "#892CDC",
      },
    },
  });

  const [myLikePosts, setMyLikePosts] = useState([]);

  const userData = jwt_decode(localStorage.getItem("token"));

  async function testPromise() {
    axios
      .get(
        `${BASE_URL}/api/auth/v1/list/currentuser/like/post/${userData.id}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        Promise.all(
          res.data.map(async (like) => {
            // return await mapMyLikePost(like.postId);
            return await axios.get(
              `${BASE_URL}/api/auth/v1/post/${like.postId}`,
              {
                headers: {
                  Authorization: `${localStorage.getItem("token")}`,
                  "Content-Type": "application/json; charset=UTF-8",
                },
              }
            );
          })
        ).then((res) => {
          const resArray = res.map((one) => one.data);

          setMyLikePosts(resArray);
          console.log("last", myLikePosts);
        });
      });
  }

  const navigate = useNavigate();

  function handler(props) {
    navigate(`/post/${props}`, {
      state: {
        postId: props,
      },
    });
  }

  useEffect(() => {
    testPromise();
  }, []);

  // 게시글 페이징
  const [page, setPage] = useState(1);
  const perPage = 10;
  const count = Math.ceil(myLikePosts.length / perPage);
  const postsPerPage = usePagination(myLikePosts, perPage);

  const handlePage = (e, p) => {
    setPage(p);
    postsPerPage.jump(p);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Header />
        <Box display="flex">
          <DashboardMyInfo page="MY POST LIKE" />
          <Container>
            {/* <Box display="flex" marginLeft="3%" alignItems="center">
              <FavoriteIcon color="info" />
              <Typography fontSize="25px" fontWeight="bold" marginLeft="10px">
                내가 좋아요 누른 게시글
              </Typography>
            </Box> */}
            <Grid container spacing={2}>
              <PostListOutLine>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "40rem",
                    paddingBottom: "1rem",
                  }}
                >
                  <PostSearch />
                </Box>

                <div className="communityBoard">
                  <PostColumn />
                  {myLikePosts.map((myLikePost) => (
                    <Post post={myLikePost} />
                  ))}
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
            </Grid>
          </Container>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default MyPostAndLikeDetail;
