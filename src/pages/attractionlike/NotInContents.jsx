import { Grid, ListItem } from "@mui/material";
import React from "react";
import TextProperty from "./TextProperty";

const NotInContents = ({ children }) => {
  return (
    <ListItem display="flex" key={1} dense="true">
      <Grid
        container
        margin="auto"
        width="40rem"
        display="flex"
        justifyContent="space-between"
      >
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <TextProperty>{children}</TextProperty>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </ListItem>
  );
};

export default NotInContents;
