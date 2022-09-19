import { useNavigate } from "react-router-dom";
import "./register.css";
import Footer from "../../components/footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, TextField } from "@mui/material";
import { Assignment } from "@mui/icons-material";
import Header from "../../components/header/Header";

export default function Register() {
  // navigatge
  const navigate = useNavigate();

  // 버튼 누르면 해당 주소로 route
  const handleLoginRoute = () => {
    navigate("/login");
  };

  // user
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userNickname, setUserNickname] = useState("");

  const data = [];

  // user 데이터 보내기
  function userSignIn() {
    axios
      .post(
        "http://localhost:8080/user",
        {
          username: userId,
          password: password,
          nickname: userNickname,
          userInfoDTO: {
            profileImg: "img url",
            email: email,
          },
        }
        // userInfo 를 넣지 않으면 가입이 안되므로,
        // img 와 email 을 ""(빈값)으로 넣고, 회원 수정에서 추가할 수 있도록, 필수가 아니니까.
      )
      // 성공했을 땐
      // user 등록 후 팝업이나 알림창이 뜬 뒤에 login 페이지로 이동
      .then(() => {
        // 알림창 띄우기
        handleLoginRoute();
      })
      .catch(function (error) {
        console.log(123123123);
        console.log("user 보내기 실패");
        console.log(error);
        console.log(userId);
        console.log(userNickname);
        console.log(password);
        console.log(email);
      });
  }

  // const onSubmitHandler = async (e) => {
  //   e.preventDefault();

  //   const user = {
  //     email,
  //     password,
  //   };

  //   try {
  //     const response = await instance.post("/signin", JSON.stringify(user));
  //     if (response.status === 200) {
  //       localStorage.setItem("access_token", response.data.access_token);
  //       navigate("/todo");
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <Container maxWidth="lg">
      <Header />
      <div className="registerBackground">
        <div className="registerContainer">
          <div className="registerWrapper">
            <div className="registerTitleIcon">
              <Assignment
                fontSize="large"
                color="disabled"
                className="registerIcon"
              />
            </div>
            <div className="registerTitleContainer">
              <span className="registerTitle">Register</span>
            </div>
            <div className="topLine"></div>
            <form className="registerForm">
              {/* user 서식 */}
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
                label="닉네임"
                variant="standard"
                margin="normal"
                size="small"
                onChange={(e) => {
                  setUserNickname(e.target.value);
                }}
              />
              <TextField
                id="standard-basic"
                label="이메일"
                variant="standard"
                margin="normal"
                size="small"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
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
              {/* user 보내는 버튼 */}
              <Button
                type="button"
                className="registerButton"
                variant="contained"
                onClick={() => userSignIn()}
              >
                가입하기
              </Button>
              <div className="underLine"></div>
              <Button
                className="loginRegisterButton"
                onClick={handleLoginRoute}
              >
                이미 가입하셨나요?
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}
