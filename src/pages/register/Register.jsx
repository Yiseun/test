import { useNavigate } from "react-router-dom";
import "./register.css";
import Footer from "../../components/footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Assignment } from "@mui/icons-material";
import Header from "../../components/header/Header";
import LeftSide from "./LeftSide";
import { BASE_URL } from "../../baseUrl";

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
        BASE_URL + "/all/v1/register",
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
    <>
      <Header />
      <Grid
        container
        sx={{
          background:
            "linear-gradient(rgba(137, 135, 135, 0.5), rgba(78, 76, 76, 0.3)), url('https://uibswiss.ch/wp-content/uploads/2016/01/00_Top-Travel-Trends-for-2018_209155915_06photo_FT.jpg')",
          backgroundSize: "100%",
        }}
      >
        <Grid item xs={7.5}>
          <LeftSide />
        </Grid>
        <Grid item xs={4.5} sx={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
          <div className="registerBackground">
            <Box
              sx={{
                backgroundColor: "rgba(188,	111,	241, 0.7)",
                width: "16rem",
                height: "60%",
                borderRadius: "15px",
                padding: "2rem",
              }}
            >
              <div className="registerTitleContainer">
                <Typography fontSize="1.6rem" color="white">
                  REGISTER
                </Typography>
              </div>
              <form className="registerForm">
                {/* user 서식 */}
                <TextField
                  id="standard-basic"
                  label="ID"
                  variant="standard"
                  margin="normal"
                  size="small"
                  onChange={(e) => {
                    setUserId(e.target.value);
                  }}
                />
                <TextField
                  id="standard-basic"
                  label="NICKNAME"
                  variant="standard"
                  margin="normal"
                  size="small"
                  onChange={(e) => {
                    setUserNickname(e.target.value);
                  }}
                />
                <TextField
                  id="standard-basic"
                  label="EMAIL"
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
                  label="PW"
                  variant="standard"
                  margin="normal"
                  size="small"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {/* user 보내는 버튼 */}
                <Box
                  sx={{
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    type="button"
                    className="registerButton"
                    variant="outlined"
                    sx={{
                      padding: "0.5 rem, 1rem",
                      marginRight: "0.5rem",
                      color: "#892CDC",
                      fontSize: "0.8rem",
                      width: "4rem",
                      background: "#DFBCFF",
                      borderColor: "#892CDC",
                      borderRadius: "0.6rem",
                      ":hover": {
                        background: "#ddd",
                        color: "#892CDC",
                        borderColor: "#892CDC",
                      },
                    }}
                    onClick={() => userSignIn()}
                  >
                    JOIN
                  </Button>
                </Box>
                <Button
                  className="loginRegisterButton"
                  onClick={handleLoginRoute}
                  sx={{
                    color: "white",
                  }}
                >
                  이미 가입하셨나요?
                </Button>
              </form>
            </Box>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
