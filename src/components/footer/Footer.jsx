import { Box, Grid } from "@mui/material";
import React from "react";
import "./footer.css";
import FooterCenter from "./FooterCenter";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <Grid
      container
      sx={{
        alignItems: "center",
      }}
    >
      <Grid item xs={4}>
        <FooterLeft />
      </Grid>
      <Grid item xs={4}>
        <FooterCenter />
      </Grid>
      <Grid item xs={4}>
        <FooterRight />
      </Grid>
    </Grid>
  );
};

export default Footer;
