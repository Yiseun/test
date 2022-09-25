import { Search } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const Bar = ({ setSearchAttraction, searchFilterAttraction }) => {
  return (
    <Stack
      display="flex"
      flexDirection="row"
      justifyContent="center"
      sx={{
        padding: "0.5rem",
      }}
    >
      <TextField
        id="outlined-검색"
        color="secondary"
        borderRadius="2rem"
        label="검색"
        focused
        sx={{ margin: "3px", borderColor: "#892CDC", borderRadius: "10rem" }}
        onChange={(e) => {
          setSearchAttraction(e.target.value);
        }}
      />
      <Button
        variant="text"
        color="secondary"
        className="postSearchButton"
        padding="0"
        sx={{
          borderWidth: 3,
          borderRadius: "5rem",
        }}
        onClick={() => {
          searchFilterAttraction();
        }}
      >
        <Search />
      </Button>
    </Stack>
  );
};

export default Bar;
