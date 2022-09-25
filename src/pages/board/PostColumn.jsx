import { Grid, ListItem } from "@mui/material";
import React from "react";
import TextProperty from "./TextProperty";

const PostColumn = () => {
  return (
    <ListItem key={0}>
      <Grid
        container
        width="40rem"
        display="flex"
        justifyContent="space-between"
      >
        <Grid item xs={1}>
          <TextProperty>INDEX</TextProperty>
        </Grid>
        <Grid item xs={7}>
          <TextProperty>TITLE</TextProperty>
        </Grid>
        <Grid item xs={2}>
          <TextProperty>REPLY</TextProperty>
        </Grid>
        <Grid item xs={2}>
          <TextProperty>LIKES</TextProperty>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default PostColumn;
