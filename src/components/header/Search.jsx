import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

const Search = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <SearchIcon fontSize="large" color="info" />
    </Button>
  );
};

export default Search;
