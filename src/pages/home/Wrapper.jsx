import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Wrapper = ({ title, children, linkHandler }) => {
  return (
    <Card variant="outlined" sx={{ margin: "10px" }}>
      <CardHeader
        title={
          <Typography fontSize="20px" fontWeight="bold">
            {title}
          </Typography>
        }
        action={
          <Typography>
            <Button
              sx={{ color: "#892CDC", fontSize: "20px" }}
              onClick={linkHandler}
            >
              더보기
            </Button>
          </Typography>
        }
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "40px 70px 0 40px",
        }}
      />
      {children}
    </Card>
  );
};

export default Wrapper;
