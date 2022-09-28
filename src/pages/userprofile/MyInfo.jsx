import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const MyInfo = ({ user }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Stack sx={{ paddingRight: "50px", paddingLeft: "20px" }}>
        <Avatar
          alt="Profile IMG"
          src={user.profileImg}
          borderRadius="2rem"
          sx={{
            width: 100,
            height: 100,
          }}
        />
      </Stack>
      <Stack sx={{ padding: "10px" }}>
        <Typography variant="body1" component="p">
          <Typography component="p">ID : {user.username}</Typography>
          <Typography component="p">NICKNAME : {user.nickname}</Typography>
          <Typography component="p">EMAIL : {user.email}</Typography>
        </Typography>
      </Stack>
    </Box>
  );
};

export default MyInfo;
