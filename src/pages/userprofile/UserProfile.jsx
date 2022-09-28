import { Container, Typography, Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardMyInfo from "../../components/dashboardmyinfo/DashboardMyInfo";
import Header from "../../components/header/Header";
import MyInfo from "./MyInfo";
import MyPostAndLike from "./MyPostAndLike";
import Wrapper from "./Wrapper";
import jwt_decode from "jwt-decode";
import { makeOrderProfileImg } from "../../image/profileImg";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../../baseUrl";

const UserProfile = () => {
  // 해당주소로 보내기
  const navigate = useNavigate();
  function handleRoute(props) {
    navigate(`/${props}`);
  }

  const userData = jwt_decode(localStorage.getItem("token"));

  const user = {
    username: userData.username,
    nickname: userData.nickname,
    email: userData.email,
    profileImg: makeOrderProfileImg(userData.id),
  };

  // 내가 쓴 게시글 전체 가져오기

  const [posts, setPosts] = useState([]);
  const [likePosts, setLikePosts] = useState([]);

  function myposts() {
    axios
      .get(`${BASE_URL}/api/auth/v1/post/user/top`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
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
  }

  function mylikepostlists() {
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
      .then((response) => {
        Promise.all(
          response.data.map(async (likepost) => {
            return await axios.get(
              `${BASE_URL}/api/auth/v1/post/${likepost.postId}`,
              {
                headers: {
                  Authorization: `${localStorage.getItem("token")}`,
                  "Content-Type": "application/json; charset=UTF-8",
                },
              }
            );
          })
        ).then((res) => {
          const resArray = res.map((resData) => resData.data);

          setLikePosts(resArray);
        });
      })
      .catch(function (error) {
        console.log("에러");
        console.log(error);
      });
  }

  useEffect(() => {
    myposts();
    mylikepostlists();
  }, []);

  return (
    <Container maxWidth="lg">
      <Header />
      <Box display="flex">
        <DashboardMyInfo page="INFO" />
        <Container className="DetailContainer">
          <Wrapper
            name="MY INFO"
            onClick={() => {
              handleRoute("user/update");
            }}
          >
            <MyInfo user={user} />
          </Wrapper>

          <Wrapper
            name="MY POST"
            onClick={() => {
              handleRoute("user/myposts");
            }}
          >
            <MyPostAndLike posts={posts} />
          </Wrapper>

          <Wrapper
            name="MY POST LIKES"
            onClick={() => {
              handleRoute("user/mylikes");
            }}
          >
            <MyPostAndLike posts={likePosts} />
          </Wrapper>
        </Container>
      </Box>
    </Container>
  );
};

export default UserProfile;
