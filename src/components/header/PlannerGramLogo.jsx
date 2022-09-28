import { Button } from "@mui/material";
import React from "react";

const PlannerGramLogo = ({ handleHome }) => {
  return (
    <Button id="basic-button" sx={{ borderRadius: "2rem" }} color="secondary">
      <img
        src="https://github.com/Manidle/final-front/blob/develop/public/logo.png?raw=true"
        alt="logo"
        className="logo"
        height="50px"
        width="50px"
        onClick={handleHome}
      />
    </Button>
  );
};

export default PlannerGramLogo;
