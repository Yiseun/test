import {
  Box,
  Button,
  createTheme,
  ListItem,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CategoryDetail from "./CategoryDetail";
import ModalDetail from "./ModalDetail";

const CategoryBarInModal = () => {
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
    { thisCategory: "stay", url: "stay" },
    { thisCategory: "attraction", url: "attraction" },
    { thisCategory: "train", url: "train" },
    { thisCategory: "rentcar", url: "rentcar" },
  ];
  const [currentCategory, setCurrentCategory] = useState("stay");

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
                    handler={() => setCurrentCategory(categories.thisCategory)}
                    currentCategory={currentCategory}
                    thisCategory={categories.thisCategory}
                  />
                </ListItem>
              ))}
            </Box>
            <Box className="categoryContents" display="row" padding="10px">
              <Box sx={{ maxHeight: "50%" }}>
                <ModalDetail currentCategory={currentCategory} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CategoryBarInModal;
