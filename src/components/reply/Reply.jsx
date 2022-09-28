import React from "react";
import { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  Button,
  CardContent,
  TextField,
  Typography,
  Box,
  Divider,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import axios from "axios";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { BASE_URL } from "../../baseUrl";
import jwt_decode from "jwt-decode";

const Reply = (props) => {
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

  const postId = Number(props.postId);

  // reply 읽어오기
  const [isLoading, setIsLoading] = useState(true);
  const [reply, setReply] = useState([]);

  const getReply = async () => {
    axios
      .get(`${BASE_URL}/api/auth/v1/reply/post/${postId}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        setReply(response.data.reverse());
        console.log(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          console.log("첫번째 에러");
          console.log(error.response.data);
          setReply([]);
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
  };

  useEffect(() => {
    getReply();
  }, []);

  const userData = jwt_decode(localStorage.getItem("token"));

  // reply 쓰기
  const [replyContent, setReplyContent] = useState("");

  function replySubmit() {
    axios
      .get(`${BASE_URL}/api/auth/v1/reply/register`, {
        params: {
          user: userData.id,
          post: postId,
          contents: replyContent,
        },
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then(() => {
        getReply();
      })
      .then(() => {
        document.getElementById("replyInputField").value = "";
      })
      .catch(function (error) {
        if (error.response) {
          console.log("첫번째 에러");
          console.log(error.response.data);
          console.log(error.response);
        } else if (error.request) {
          console.log("두번째 에러");
          console.log(error.request);
        } else {
          console.log("세번째 에러");
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  // reply 삭제
  const handleReplyDelete = (props) => {
    axios
      .delete(`${BASE_URL}/api/auth/v1/reply/${props.replyId}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log(response);
        getReply();
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
        getReply();
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="replyContainer">
        <div className="replyWrapper">
          <Typography fontWeight="bold" padding="10px" color="primary">
            댓글
          </Typography>
          <Box className="inputReply" display="flex">
            <TextField
              color="secondary"
              label="댓글 내용"
              multiline
              row={3}
              onChange={(e) => {
                setReplyContent(e.target.value);
              }}
              id="replyInputField"
            />
            <Button
              className="replySubmitButton"
              color="secondary"
              variant="contained"
              onClick={() => {
                replySubmit();
              }}
            >
              입력
            </Button>
          </Box>
          <div className="replyDisply">
            <div className="replyContentsContainer">
              <div className="replyContents">
                {reply.length === 0 ? (
                  <Box padding="10px">"댓글이 없습니다."</Box>
                ) : (
                  reply.map((reply) => (
                    <>
                      <Box key={reply.replyId} display="flex">
                        <CardContent className="replyWriter">
                          {reply.nickName}
                        </CardContent>
                        {/* <CardContent>replyId: {reply.replyId}</CardContent> */}
                        <CardActions>
                          <Button
                            size="small"
                            onClick={() => {
                              handleReplyDelete(reply);
                            }}
                          >
                            <DeleteForeverIcon color="info" />
                          </Button>
                        </CardActions>
                        <CardContent>댓글 내용: {reply.contents}</CardContent>
                      </Box>
                      <Divider />
                    </>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Reply;
