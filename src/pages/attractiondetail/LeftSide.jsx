import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PurpleText from "./PurpleText";
import RoundBox from "./RoundBox";
import WhiteRoundBox from "./WhiteRoundBox";
import SearchIcon from "@mui/icons-material/Search";

const LeftSide = ({
  attractionName,
  attractionPrice,
  attractionAddress,
  date,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItem: "center",
      }}
    >
      <Typography
        className="dashBoardTitle"
        fontSize={16}
        fontWeight="bold"
        margin="auto"
        marginBottom="1rem"
      >
        {attractionName}
      </Typography>

      <RoundBox>{attractionAddress}</RoundBox>
      <WhiteRoundBox>
        <Box
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            className="dashBoardTitle"
            fontSize={16}
            fontWeight="normal"
            margin="auto"
          >
            {date}
          </Typography>
          <SearchIcon fontSize="large" color="info" sx={{ width: "1.5rem" }} />
        </Box>
      </WhiteRoundBox>
      <RoundBox>
        <PurpleText>{attractionPrice} 원</PurpleText>
      </RoundBox>
      <RoundBox>
        <PurpleText>예약하기</PurpleText>
      </RoundBox>
    </Box>
  );
};

export default LeftSide;
