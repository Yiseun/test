import { ThemeProvider, Box, createTheme, ListItem } from "@mui/material";
import axios from "axios";
import PropTypes from "prop-types";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import CategoryDetail from "./CategoryDetail";

const CategoryBar = ({ category }) => {
  const theme = createTheme({
    palette: {
      primary: {
        // 가장 어두운 보라
        main: "#52057B",
      },
      secondary: {
        // 가장 밝은 보라
        main: "#BC6FF1",
      },
      info: {
        // 중간 보라
        main: "#892CDC",
      },
    },
  });

  // tab list
  const categoryLists = [
    { thisCategory: "stay", Url: "stay" },
    { thisCategory: "attraction", Url: "attraction" },
    { thisCategory: "train", Url: "train" },
    { thisCategory: "rentcar", Url: "rentcar" },
  ];

  const navigate = useNavigate();
  function handler(props) {
    navigate(`/search/${props}`);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Box>
            <Box className="categorySelect" display="flex" padding="5px">
              {categoryLists.map((categories) => (
                <ListItem
                  display="flex"
                  key={categories.thisCategory}
                  dense="true"
                >
                  <CategoryDetail
                    handler={() => {
                      handler(categories.Url);
                    }}
                    currentCategory={category}
                    thisCategory={categories.thisCategory}
                  />
                </ListItem>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CategoryBar;
