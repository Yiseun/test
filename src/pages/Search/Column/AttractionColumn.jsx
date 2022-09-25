import { Grid, ListItem, Typography } from "@mui/material";
import React from "react";

const TextProperty = ({ children }) => {
  return (
    <Typography textAlign="center" fontWeight="bold" fontSize={14}>
      {children}
    </Typography>
  );
};

const AttractionColumn = () => {
  return (
    <ListItem key={0}>
      <Grid
        container
        margin="auto"
        width="40rem"
        display="flex"
        justifyContent="space-between"
      >
        <Grid item xs={4}>
          <TextProperty>NAME</TextProperty>
        </Grid>
        <Grid item xs={4}>
          <TextProperty>CITY</TextProperty>
        </Grid>
        <Grid item xs={4}>
          <TextProperty>LIKES</TextProperty>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default AttractionColumn;
