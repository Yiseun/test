import { createTheme, ThemeProvider, Typography } from "@mui/material";
import React from "react";

const CategoryDetail = ({ handler, currentCategory, thisCategory }) => {
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

  return (
    <ThemeProvider theme={theme}>
      {currentCategory === thisCategory ? (
        <Typography onClick={handler} color="secondary">
          {thisCategory}
        </Typography>
      ) : (
        <Typography onClick={handler} color="main">
          {thisCategory}
        </Typography>
      )}
    </ThemeProvider>
  );
};

export default CategoryDetail;
