import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

import Footer from "../../components/footer/Footer";
import {
  Button,
  Container,
  IconButton,
  SvgIcon,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";

import { Person } from "@mui/icons-material";
import Header from "../../components/header/Header";

export default function Login() {
  //navigatge
  const navigate = useNavigate();

  // 버튼 누르면 해당 주소로 route
  const handleRoute = () => {
    navigate("/user/regist");
  };

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const loginClick = async (e) => {
    await axios
      .post(
        "http://localhost:8080/login",
        JSON.stringify({
          username: userId,
          password: password,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        console.log(response);
        const token = response.data.jwtToken;
        console.log("토큰은!!! ", token);
        localStorage.setItem("token", token);
        // ctx.onLogin(userId, password);
        // navigate(-1);
      })
      .catch((err) => {
        console.log(err);
        const errCode = err.response.status;
        if (errCode === 401) {
          // setErr("이메일 혹은 비밀번호를 확인해주세요");
        }
      });
  };

  return (
    <Container maxWidth="lg">
      <Header />
      <div className="loginBackground">
        <div className="loginContainer">
          <div className="loginWrapper">
            <div className="loginTitleIcon">
              <Person fontSize="large" color="disabled" />
            </div>
            <div className="loginTitleContainer">
              <span className="loginTitle">Login</span>
            </div>
            <div className="topLine"></div>
            <form className="loginForm">
              <TextField
                id="standard-basic"
                label="아이디"
                variant="standard"
                margin="normal"
                size="small"
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
              />
              <TextField
                id="standard-basic"
                label="비밀번호"
                variant="standard"
                margin="normal"
                size="small"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button
                onClick={loginClick}
                className="loginButton"
                variant="contained"
              >
                로그인
              </Button>
              <div className="underLine"></div>
              <Button
                type="button"
                className="loginRegisterButton"
                onClick={handleRoute}
              >
                아직 가입하지 않으셨나요?
              </Button>
              <div className="otherLogin">
                <IconButton className="google">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png"
                    height="40px"
                    width="40px"
                    alt="google"
                  />
                </IconButton>
                <IconButton className="google">
                  <img
                    src="https://m.gelatofactory.co.kr/web/upload/img/m/ico-kakao.png"
                    height="40px"
                    width="40px"
                    alt="kakao"
                  />
                </IconButton>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}
