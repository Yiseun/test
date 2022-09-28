import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() =>
        navigate(`/post/${post.postId}`, {
          state: {
            postId: post.postId,
          },
        })
      }
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography paddingLeft={5}>{post.title}</Typography>
      <Typography paddingRight={5}>{post.boardName}</Typography>
    </Box>
  );
};

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post, i) => (
        <Post post={post} />
      ))}
    </div>
  );
};

const MyPostAndLike = ({ posts }) => {
  return (
    <Typography variant="body1" component="p">
      <PostList posts={posts} />
    </Typography>
  );
};

export default MyPostAndLike;
