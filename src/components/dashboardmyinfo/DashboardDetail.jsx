import { Typography } from "@mui/material";
import React from "react";

const DashboardDetail = ({ handler, currentPage, thisPage }) => {
  if (currentPage === thisPage) {
    return (
      <Typography
        color="#892CDC"
        className="dashboardDetail"
        onClick={() => handler()}
      >
        {thisPage}
      </Typography>
    );
  } else {
    return (
      <Typography className="dashboardDetail" onClick={() => handler()}>
        {thisPage}
      </Typography>
    );
  }
};

export default DashboardDetail;
