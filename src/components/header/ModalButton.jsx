import { MenuItem, Typography } from "@mui/material";
import React from "react";

const ModalButton = ({ children, onClick }) => {
  return (
    <MenuItem
      onClick={onClick}
      sx={{
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Typography fontSize={14}>{children}</Typography>
    </MenuItem>
  );
};

export default ModalButton;
