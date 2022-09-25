import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

import Footer from "../../components/footer/Footer";
import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  IconButton,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";

import { Person } from "@mui/icons-material";
import Header from "../../components/header/Header";
import { Box } from "@mui/system";
import LeftSide from "./LeftSide";
import { BASE_URL } from "../../baseUrl";

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
        BASE_URL + "/login",
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
        navigate("/");
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
          <div className="loginBackground">
            <Box
              className="loginContainer"
              sx={{
                backgroundColor: "rgba(188,	111,	241, 0.7)",
                width: "16rem",
                height: "60%",
                borderRadius: "15px",
                padding: "2rem",
              }}
            >
              <div className="loginWrapper">
                <div className="loginTitleContainer">
                  <Typography fontSize="1.6rem" color="white">
                    LOGIN
                  </Typography>
                </div>
                <form className="loginForm">
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
                    label="PW"
                    variant="standard"
                    margin="normal"
                    size="small"
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <Box
                    sx={{
                      padding: "1rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      onClick={loginClick}
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
                    >
                      LOGIN
                    </Button>
                    <Button
                      onClick={handleRoute}
                      sx={{
                        padding: "0.5 rem, 1rem",
                        color: "#F2E2FC",
                        fontSize: "0.8rem",
                        width: "4rem",

                        background: "#892CDC",
                        borderColor: "#892CDC",
                        borderRadius: "0.6rem",

                        ":hover": {
                          background: "#DEB7F8",
                          color: "#892CDC",
                          borderColor: "#892CDC",
                        },
                      }}
                    >
                      JOIN
                    </Button>
                  </Box>

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
            </Box>
          </div>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}
