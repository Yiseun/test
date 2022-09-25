import { Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const PostSearch = () => {
  return (
    <div className="boardSearchbar">
      <TextField
        id="outlined-검색"
        label="검색"
        color="secondary"
        borderRadius="2rem"
        focused
        sx={{ margin: "3px", borderColor: "#892CDC", borderRadius: "10rem" }}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              variant="outlined"
              sx={{
                margin: "3px",
                borderColor: "#892CDC",
                borderRadius: "10rem",
              }}
            ></InputAdornment>
          ),
        }}
        size="small"
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
      >
        <SearchIcon />
      </Button>
    </div>
  );
};

export default PostSearch;
