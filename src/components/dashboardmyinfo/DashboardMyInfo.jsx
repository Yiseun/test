import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardDetail from "./DashboardDetail.jsx";
const DashboardMyInfo = ({ page }) => {
  const navigate = useNavigate();

  function handler(props) {
    navigate(`/user/${props}`);
  }

  const userInfoCategories = [
    { thisPage: "INFO", handlerUrl: "profile" },
    { thisPage: "EDIT", handlerUrl: "update" },
    { thisPage: "MY POST", handlerUrl: "myposts" },
    { thisPage: "MY POST LIKE", handlerUrl: "mylikes" },
    { thisPage: "MY REPLY", handlerUrl: "myreply" },
  ];

  const likesCategories = [
    { thisPage: "STAY", handlerUrl: "profile" },
    { thisPage: "ATTRACTION", handlerUrl: "profile" },
    { thisPage: "TRAIN", handlerUrl: "profile" },
    { thisPage: "RENTCAR", handlerUrl: "profile" },
  ];

  return (
    <Box sx={{ padding: "5px" }}>
      <div className="dashBoardContainer">
        <div className="dashBoardWrapper">
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <MenuIcon />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              backgroundColor: "#F2E2FC",
              height: "82vh",
              minWidth: "200px",
              padding: "20px 10px 20px 40px",
              borderRadius: 3,
            }}
          >
            <Stack className="dashBoardTitleContainer">
              <Typography
                className="dashBoardTitle"
                fontSize={22}
                fontWeight="bold"
                paddingBottom={1}
              >
                DASH BOARD
              </Typography>
            </Stack>
            <Stack className="dashBoardSubTitle" margin="10px 0px 0px 0px">
              <Typography
                className="dashBoardTitle"
                fontWeight="lighter"
                fontSize={14}
              >
                USER INFO
              </Typography>
              <Stack className="dashBoardMyInfoDetail">
                {userInfoCategories.map((category) => {
                  return (
                    <DashboardDetail
                      handler={() => handler(category.handlerUrl)}
                      currentPage={page}
                      thisPage={category.thisPage}
                    />
                  );
                })}
              </Stack>
            </Stack>
            <Stack className="dashBoardSubTitle" margin="10px 0px 0px 0px">
              <div className="dashBoardTravel">
                <Typography
                  className="dashBoardSubtitle"
                  fontWeight="lighter"
                  fontSize={14}
                >
                  LIKES
                </Typography>
              </div>
              <Stack className="dashBoardTravelDetail">
                {likesCategories.map((category) => {
                  return (
                    <DashboardDetail
                      handler={() => handler(category.handlerUrl)}
                      currentPage={page}
                      thisPage={category.thisPage}
                    />
                  );
                })}
              </Stack>
            </Stack>
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default DashboardMyInfo;
