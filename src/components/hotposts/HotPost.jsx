import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

import React from "react";

const makeK = (likeCount) => {
  if (likeCount < 1000) return likeCount;
  if (likeCount < 1000000) return (likeCount / 1000).toFixed(1) + "K";
  return (likeCount / 1000000).toFixed(1) + "M";
};

const HotPost = ({ post }) => {
  const navigate = useNavigate();

  function handlePostDetail(props) {
    navigate(`/post/${props}`, {
      state: {
        postId: props,
      },
    });
  }
  return (
    <Box
      onClick={() => handlePostDetail(post.postId)}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          margin: "10px",
          alignItems: "center",
        }}
      >
        <Typography paddingRight={"8px"} noWrap color="#892CDC">
          {post.boardName}
        </Typography>
        <Typography noWrap fontWeight="bold" maxWidth="150px" marginLeft={1}>
          {post.title}
        </Typography>
      </div>
      <div
        style={{
          width: "60px",
          display: "flex",
          color: "#892CDC",
          margin: "10px",
        }}
      >
        <FavoriteIcon />
        <Typography
          sx={{
            width: "60px",
            textAlign: "center",
          }}
        >
          {makeK(post.likeCount)}
        </Typography>
      </div>
    </Box>
  );
};

export default HotPost;
