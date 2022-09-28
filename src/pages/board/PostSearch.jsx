import { Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import axios from "axios";
import { BASE_URL } from "../../baseUrl";
import { useState } from "react";

const PostSearch = ({ boardId, setPosts }) => {
  const [searchWord, setSearchWord] = useState("");

  function searchPosts(boardId, props) {
    axios
      .get(
        `${BASE_URL}/api/auth/v1/post/filter/board/title?BoardId=${boardId}&title=${props}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setPosts(response.data.reverse());
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  return (
    <div className="boardSearchbar">
      <TextField
        id="outlined-검색"
        label="검색"
        color="secondary"
        borderRadius="2rem"
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
        focused
        // sx={{ margin: "3px", borderColor: "#892CDC", borderRadius: "10rem" }}
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment
        //       position="start"
        //       variant="outlined"
        //       sx={{
        //         margin: "3px",
        //         borderColor: "#892CDC",
        //         borderRadius: "10rem",
        //       }}
        //     ></InputAdornment>
        //   ),
        // }}
        size="small"
      />
      <Button
        variant="text"
        color="secondary"
        className="postSearchButton"
        padding="0"
        onClick={() => {
          searchPosts(boardId, searchWord);
        }}
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
