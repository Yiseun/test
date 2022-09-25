import {
  Box,
  Button,
  Card,
  createTheme,
  Divider,
  Grid,
  Menu,
  MenuItem,
  MenuList,
  Modal,
  SvgIcon,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SearchIcon from "@mui/icons-material/Search";
import PlannerGramLogo from "./PlannerGramLogo";
import Search from "./Search";
import Board from "./Board";
import ModalButton from "./ModalButton";

const Header = () => {
  const theme = createTheme({
    palette: {
      primary: {
        // 가장 어두운 보라
        main: "#52057B",
      },
      secondary: {
        // 가장 밝은 보라
        main: "#BC6FF1",
      },
      info: {
        // 중간 보라
        main: "#892CDC",
      },
    },
  });
  const [user, setUser] = React.useState(
    localStorage.getItem("token") ? true : false
  );

  const [berger, setBerger] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOutClick = () => {
    localStorage.removeItem("token");
    setUser(false);
  };

  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  const handleRoute = (props) => {
    navigate(`/${props}`);
  };

  const handleUserProfile = () => {
    navigate("/user/profile");
  };

  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box
        container
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          {/* 로고 */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <PlannerGramLogo handleHome={handleHome} />
          </Box>

          {/* 햄버거메뉴 */}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <Button color="secondary">
              <MenuIcon
                onClick={() => {
                  setBerger(true);
                }}
              />
            </Button>
            {!berger ? null : (
              <Modal
                open={berger}
                onClose={() => setBerger(false)}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Card
                  variant
                  sx={{
                    backgroundColor: "#F2E2FC",
                    width: 200,
                    marginBottom: 2,
                    borderRadius: 3,
                    padding: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      marginTop: "10px",
                      padding: "5px",
                      color: "#892CDC",
                      fontWeight: "bolder",
                    }}
                  >
                    CONTENTS
                  </Typography>
                  <ModalButton
                    onClick={() => {
                      handleRoute("board");
                    }}
                  >
                    POSTS
                  </ModalButton>
                  <ModalButton
                    onClick={() => {
                      handleRoute("search");
                    }}
                  >
                    SEARCH
                  </ModalButton>
                  <Typography
                    sx={{
                      marginTop: "10px",
                      padding: "5px",
                      color: "#892CDC",
                      fontWeight: "bolder",
                    }}
                  >
                    USER
                  </Typography>
                  {!user ? (
                    <ModalButton
                      onClick={() => {
                        handleRoute("login");
                        setBerger(false);
                      }}
                    >
                      LOGIN
                    </ModalButton>
                  ) : (
                    <>
                      <ModalButton onClick={handleUserProfile}>
                        MY INFO
                      </ModalButton>
                      <ModalButton onClick={handleClose}>MY POSTS</ModalButton>
                      <ModalButton
                        onClick={() => {
                          logOutClick();
                          setBerger(false);
                        }}
                      >
                        LOG OUT
                      </ModalButton>
                    </>
                  )}

                  <Button
                    variant="outlined"
                    sx={{
                      marginTop: "10px",
                      width: "100%",
                    }}
                    onClick={() => setBerger(false)}
                  >
                    EXIT
                  </Button>
                </Card>
              </Modal>
            )}
          </Box>
        </Box>
        <Box display="flex" flexDirection="row">
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Board
              onClick={() => {
                handleRoute("board");
              }}
            />
            <Search
              onClick={() => {
                handleRoute("search");
              }}
            />
          </Box>

          <Box
            sx={{ color: "secondary", display: { xs: "block", sm: "none" } }}
          >
            <PlannerGramLogo handleHome={handleHome} />
          </Box>
        </Box>
        <Box>
          {user ? (
            <ul className="topList">
              <div className="topListItem">
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  color="secondary"
                >
                  <img
                    className="topImg"
                    src="https://avatars.githubusercontent.com/u/102516088?v=4"
                    alt=""
                  />
                </Button>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  color="secondary"
                  elevation={0}
                >
                  <Box
                    sx={{
                      background: "#F2E2FC",
                      borderRadius: "0.2rem",
                    }}
                  >
                    <MenuItem onClick={handleUserProfile}>내 정보</MenuItem>
                    <MenuItem onClick={handleClose}>내가 쓴 글</MenuItem>
                    <MenuItem
                      onClick={() => {
                        logOutClick();
                        handleClose();
                      }}
                    >
                      로그아웃
                    </MenuItem>
                  </Box>
                </Menu>
              </div>
            </ul>
          ) : (
            <ul className="topList">
              <Typography
                className="topListItem"
                sx={{
                  color: "#892CDC",
                  fontWeight: "normal",
                  paddingRight: "1rem",
                }}
                onClick={() => {
                  handleRoute("login");
                }}
              >
                LOGIN
              </Typography>
            </ul>
          )}
        </Box>
      </Box>
      <Divider />
    </ThemeProvider>
  );
};

export default Header;
