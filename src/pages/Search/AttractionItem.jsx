import { Grid, ListItem, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import TextProperty from "./TextProperty";

const AttractionItem = ({ attraction }) => {
  const navigate = useNavigate();

  function handleAttractionDetail(attractionId) {
    navigate(`/attraction/${attractionId}`, {
      state: {
        attractionId: attractionId,
      },
    });
  }
  return (
    <ListItem display="flex" key={attraction.attractionId} dense="true">
      <Grid
        container
        margin="auto"
        width="40rem"
        display="flex"
        justifyContent="space-between"
      >
        <Grid item xs={4}>
          <TextProperty
            onClick={() => {
              handleAttractionDetail(attraction.attractionId);
            }}
          >
            {attraction.name}
          </TextProperty>
        </Grid>
        <Grid item xs={4}>
          <TextProperty
            onClick={() => {
              handleAttractionDetail(attraction.attractionId);
            }}
          >
            {attraction.address}
          </TextProperty>{" "}
        </Grid>
        <Grid item xs={4}>
          <TextProperty
            onClick={() => {
              handleAttractionDetail(attraction.attractionId);
            }}
          >
            {attraction.likeCount}
          </TextProperty>{" "}
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default AttractionItem;
