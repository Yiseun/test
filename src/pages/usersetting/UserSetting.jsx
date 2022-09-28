import React from "react";
import "./userSetting.css";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Header from "../../components/header/Header";
import DashboardMyInfo from "../../components/dashboardmyinfo/DashboardMyInfo";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../baseUrl";
import jwt_decode from "jwt-decode";
import { makeOrderProfileImg } from "../../image/profileImg";

const UserProfile = () => {
  const navigate = useNavigate();
  function handler(props) {
    navigate(`${props}`);
  }

  // user
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userImg, setUserImg] = useState("");
  const [email, setEmail] = useState("");

  const userData = jwt_decode(localStorage.getItem("token"));

  // 회원 정보 변경
  function updateUserProfile(id) {
    axios
      .put(`${BASE_URL}/user/${id}`, {
        loginId: userId,
        password: password,
        nickname: userNickname,
        userInfoDTO: {
          profileImg: userImg,
          email: email,
        },
      })
      .then(() => {
        handler("/user/profile");
      })
      .catch(function (error) {
        console.log(error);
        console.log(id);
      });
  }

  // 회원 정보 삭제(탈퇴)
  function deleteUser(id) {
    axios
      .delete(`${BASE_URL}/user/${id}`)
      .then(() => {
        handler("");
      })
      .catch(function (error) {
        console.log(error);
        console.log(id);
      });
  }

  return (
    <Container maxWidth="lg">
      <Header />
      <Box display="flex">
        <DashboardMyInfo page="EDIT" />

        <Container
          sx={{
            backgroundColor: "#F2E2FC",
            borderRadius: 3,
            marginLeft: 2,
            display: { xs: "inline", sm: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px",
              padding: "5px",
            }}
          >
            <Box
              sx={{
                display: "block",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {userData.nickname}
              </Typography>
              <Typography>님의 정보를 변경하세요!</Typography>
            </Box>
            <Avatar
              alt="Profile IMG"
              src={makeOrderProfileImg(userData.id)}
              sx={{ width: "8rem", height: "8rem", marginTop: "1rem" }}
            />
            <ButtonGroup sx={{ marginTop: "2rem" }}>
              <Button
                sx={{
                  padding: "0.5 rem, 1rem",
                  color: "#F2E2FC",
                  fontSize: "0.8rem",

                  background: "#892CDC",
                  borderColor: "#892CDC",
                  ":hover": {
                    background: "#DEB7F8",
                    color: "#892CDC",
                    borderColor: "#892CDC",
                  },
                }}
              >
                프로필 사진 업데이트
              </Button>
              <Button
                sx={{
                  padding: "0.5 rem, 1rem",
                  color: "#892CDC",
                  fontSize: "0.8rem",
                  borderColor: "#892CDC",
                  ":hover": {
                    background: "#DEB7F8",
                    color: "#892CDC",
                    borderColor: "#892CDC",
                  },
                }}
              >
                프로필 사진 삭제
              </Button>
            </ButtonGroup>
          </Stack>
        </Container>

        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "2rem",
            marginTop: "3rem",
            width: "15rem",
          }}
        >
          <TextField
            id="standard-basic"
            // label="아이디"
            variant="standard"
            placeholder={userData.username}
            onChange={(e) => {
              setUserId(e.target.value);
            }}
            size="small"
            type="text"
          />
          {/* <TextField
            id="standard-basic"
            label="비밀번호"
            variant="standard"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            size="small"
            type="password"
          /> */}

          <TextField
            id="standard-basic"
            // label="이메일"
            variant="standard"
            placeholder={userData.email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            size="small"
            type="email"
          />
          <TextField
            id="standard-basic"
            // label="닉네임"
            variant="standard"
            placeholder={userData.nickname}
            onChange={(e) => {
              setUserNickname(e.target.value);
            }}
            size="small"
            type="text"
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
              width: "15rem",
            }}
          ></Box>
          <ButtonGroup
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                padding: "0.5 rem, 1rem",
                color: "#892CDC",
                borderColor: "#892CDC",
                fontSize: "0.8rem",
                ":hover": {
                  background: "#DEB7F8",
                  color: "#892CDC",
                  borderColor: "#892CDC",
                },
              }}
              onClick={() => updateUserProfile(5)}
            >
              정보 변경
            </Button>
            <Button
              sx={{
                padding: "0.5 rem, 1rem",
                color: "#F2E2FC",
                background: "#892CDC",
                borderColor: "#892CDC",
                fontSize: "0.8rem",
                ":hover": {
                  background: "#DEB7F8",
                  color: "#892CDC",
                  borderColor: "#892CDC",
                },
              }}
              onClick={() => deleteUser(4)}
            >
              회원 탈퇴
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </Container>
  );
};

export default UserProfile;
