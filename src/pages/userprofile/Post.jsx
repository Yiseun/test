import { Grid, ListItem, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();

  function handlePostDetail(props) {
    navigate(`/post/${props}`, {
      state: {
        postId: props,
      },
    });
  }

  return (
    <ListItem
      display="flex"
      justifyContent="space-between"
      width="40rem"
      key={post.postId}
      // dense="true"
    >
      <Grid container>
        <Grid item xs={1}>
          <Typography
            onClick={() => {
              handlePostDetail(post.postId);
            }}
          >
            {post.postId}
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography
            onClick={() => {
              handlePostDetail(post.postId);
            }}
          >
            {post.title}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            onClick={() => {
              handlePostDetail(post.postId);
            }}
          >
            {post.replys.length}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            onClick={() => {
              handlePostDetail(post.postId);
            }}
          >
            {post.likeCount}
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default Post;
