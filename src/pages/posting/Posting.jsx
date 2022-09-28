import { PhotoCamera } from "@mui/icons-material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Modal,
  Typography,
  Snackbar,
  ThemeProvider,
  createTheme,
  Stack,
  Autocomplete,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CategoryBar from "../../components/CategoryBar";
import Header from "../../components/header/Header";
import CloseIcon from "@mui/icons-material/Close";
import "./posting.css";
import jwt_decode from "jwt-decode";
import { BASE_URL } from "../../baseUrl";
import CategoryBarInModal from "../../components/CategoryBarInModal";
import Footer from "../../components/footer/Footer";

const Posting = () => {
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

  const navigate = useNavigate();

  const boardProps = useLocation();
  const boardId = boardProps.state.boardId;

  // 게시글 data
  const [postTitle, setPostTitle] = useState("");
  const [postArticle, setPostArticle] = useState("");

  // 게시글 작성 후 게시판으로 이동. 후에 prop 를 넣어 전체 게시판이 아닌 해당 게시판으로 이동하도록.
  function handleAfterPosting() {
    handleSnackbar();
  }

  const userData = jwt_decode(localStorage.getItem("token"));

  function postConnectOther({ response, props }) {
    const stays = JSON.parse(sessionStorage.getItem("stayData"));
    const attractions = JSON.parse(sessionStorage.getItem("attractionData"));
    const trains = JSON.parse(sessionStorage.getItem("trainData"));
    const rentcars = JSON.parse(sessionStorage.getItem("rentcarData"));

    if (props === "stay") {
      Promise.all(
        stays.map(async (stay) => {
          return await axios.get(
            `${BASE_URL}/api/auth/v1/post-contents/post-${props}/click?post=${response.data.postId}&stay=${stay.id}`,
            {
              headers: {
                Authorization: `${localStorage.getItem("token")}`,
                "Content-Type": "application/json; charset=UTF-8",
              },
            }
          );
        })
      ).catch(function (error) {
        console.log(error.response);
        console.log(error.response.data);
      });
    }
    if (props === "attraction") {
      Promise.all(
        attractions.map(async (attraction) => {
          return await axios.get(
            `${BASE_URL}/api/auth/v1/post-contents/post-${props}/click?post=${response.data.postId}&attraction=${attraction.attractionId}`,
            {
              headers: {
                Authorization: `${localStorage.getItem("token")}`,
                "Content-Type": "application/json; charset=UTF-8",
              },
            }
          );
        })
      ).catch(function (error) {
        console.log(error.response);
        console.log(error.response.data);
      });
    }
    if (props === "train") {
      Promise.all(
        trains.map(async (train) => {
          return await axios.post(
            `${BASE_URL}/api/auth/v1/postcontents/post${props}/click/${response.data.postId}`,

            {
              adultcharge: train.adultcharge,
              arrplacename: train.arrplacename,
              arrplandtime: train.arrplandtime,
              depplacename: train.depplacename,
              depplandtime: train.depplandtime,
              trainno: train.trainno,
            },
            {
              headers: {
                Authorization: `${localStorage.getItem("token")}`,
                "Content-Type": "application/json; charset=UTF-8",
              },
            }
          );
        })
      ).catch(function (error) {
        console.log(error.response);
        console.log(error.response.data);
      });
    }
    if (props === "rentcar") {
      Promise.all(
        rentcars.map(async (rentcar) => {
          return await axios.get(
            `${BASE_URL}/api/auth/v1/post-contents/post-rent-car/click?post=${response.data.postId}&rentcar=${rentcar.rentCarId}`,
            {
              headers: {
                Authorization: `${localStorage.getItem("token")}`,
                "Content-Type": "application/json; charset=UTF-8",
              },
            }
          );
        })
      ).catch(function (error) {
        console.log(error.response);
        console.log(error.response.data);
      });
    }
  }

  // 게시글 data 보내기
  function postSubmit(props) {
    axios
      .post(
        `${BASE_URL}/api/auth/v1/board/${props}/post/register`,
        {
          title: postTitle,
          contents: postArticle,
          like_count: 0,
          read_count: 0,
          board_id: props,
          user_id: userData.id,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        if (sessionStorage.getItem("stayData") != null) {
          postConnectOther({ response, props: "stay" });
        }
        if (sessionStorage.getItem("attractionData") != null) {
          postConnectOther({ response, props: "attraction" });
        }
        if (sessionStorage.getItem("trainData") != null) {
          postConnectOther({ response, props: "train" });
        }
        if (sessionStorage.getItem("rentcarData") != null) {
          postConnectOther({ response, props: "rentcar" });
        }
      })
      .then(() => {
        handleAfterPosting();
      })
      .then(() => {
        sessionStorage.clear();
      })
      .then(() => {
        setTimeout(() => {
          navigate("/board");
        }, 1500);
      })
      .catch(function (error) {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          console.log("첫번째 에러");
          console.log(error.response.data);
          console.log("asdfasdfasdfasdfasdf", boardId);
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

  // Modal
  const [openModal, setOpenModal] = React.useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "50%",
    width: "50%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const [stateSnackbar, setStateSnackbar] = React.useState({
    openSnackbar: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, openSnackbar } = stateSnackbar;
  const handleSnackbar = () => {
    setStateSnackbar({ ...stateSnackbar, openSnackbar: !openSnackbar });
  };

  const [boardLists, setBoardLists] = useState([]);
  const [boardSelectedId, setBoardSelectedId] = useState(1);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/board`).then((response) => {
      setBoardLists(response.data);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Snackbar
          color="info"
          anchorOrigin={{ vertical, horizontal }}
          open={openSnackbar}
          onClose={handleSnackbar}
          message="게시글 등록에 성공했습니다!"
          key={vertical + horizontal}
        />
        <Header />
        <Box className="postingContainer">
          <div className="postingWrapper">
            <Stack className="postingItem">
              <Typography
                className="postingTitle"
                variant="h6"
                fontWeight="bold"
                margin="5px"
              >
                게시글 등록
              </Typography>
            </Stack>
            <Stack className="postingItem" padding="5px" display="flex">
              {/* <Autocomplete
                value={boardSelectedId}
                onChange={(event, newValue) => {
                  setBoardSelectedId(newValue);
                }}
                id="controllable-states-demo"
                options={boardLists}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Controllable" />
                )}
              /> */}
              <TextField
                variant="standard"
                label="게시글 제목"
                size="small"
                onChange={(e) => {
                  setPostTitle(e.target.value);
                }}
              />
            </Stack>
            <Box className="postingItem" display="flex" padding="5px">
              {/* 사진 파일 추가 버튼 */}
              <IconButton
                color="default"
                aria-label="upload picture"
                component="label"
              >
                <input hidden accept="image/*" type="file" />
                <PhotoCamera color="secondary" />
              </IconButton>
              {/* 코스 추가용 Modal */}
              <IconButton onClick={handleModal}>
                <AddCircleOutlineIcon color="secondary" />
              </IconButton>
              <Modal
                open={openModal}
                onClose={handleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={modalStyle}>
                  <CloseIcon
                    fontSize="large"
                    color="secondary"
                    sx={{ position: "absolute", right: "5%" }}
                    onClick={handleModal}
                  />
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    justifyContent="center"
                    display="flex"
                    fontWeight="bold"
                  >
                    새로운 항목 추가하기
                  </Typography>
                  <CategoryBarInModal />
                </Box>
              </Modal>
            </Box>
            <Stack className="postingItem" padding="5px">
              <TextField
                label="내용"
                multiline
                rows={10}
                onChange={(e) => {
                  setPostArticle(e.target.value);
                }}
              />
            </Stack>
            <Stack className="postingItem" padding="5px">
              <Button
                variant="contained"
                color="info"
                className="postingButton"
                onClick={() => {
                  postSubmit(boardId);
                }}
              >
                게시글 등록
              </Button>
            </Stack>
          </div>
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Posting;
