import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

const FooterCenter = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <Button
      id="basic-button"
      sx={{
        display: { xs: "none", sm: "block" },
        fontWeight: "bold",
        margin: "auto",
        ":hover": { background: "none" },
        borderRadius: "2rem",
      }}
      color="secondary"
    >
      PLANNER GRAM
    </Button>
  );
};

export default FooterCenter;
