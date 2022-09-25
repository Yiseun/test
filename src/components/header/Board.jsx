import React from "react";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Button } from "@mui/material";

const Board = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <QuestionAnswerIcon fontSize="large" color="info" />
    </Button>
  );
};

export default Board;
