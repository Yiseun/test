import { Typography } from "@mui/material";
import React from "react";
import classes from "./FooterRightItem.module.css";

const FooterRightItem = ({ people }) => {
  return (
    <Typography fontWeight="bold" className={classes.memberItem}>
      <a href={people.url}>{people.name}</a>
    </Typography>
  );
};

export default FooterRightItem;
