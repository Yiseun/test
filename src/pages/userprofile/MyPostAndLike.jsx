import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const contents = [
  { title: "경주를 엄청나게 잘 놀고왔어용", date: "2022.03.21" },
  { title: "부산을 엄청나게 잘 놀고왔어용", date: "2022.03.22" },
  { title: "인천을 엄청나게 잘 놀고왔어용", date: "2022.03.23" },
];

const Post = ({ content }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography paddingLeft={5}>{content.title}</Typography>
      <Typography paddingRight={5}>{content.date}</Typography>
    </Box>
  );
};

const PostList = ({ contents }) => {
  return (
    <div>
      {contents.map((content) => (
        <Post content={content} />
      ))}
    </div>
  );
};

const MyPostAndLike = () => {
  return (
    <Typography variant="body1" component="p">
      <PostList contents={contents} />
    </Typography>
  );
};

export default MyPostAndLike;
