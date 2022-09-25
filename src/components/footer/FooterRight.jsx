import { Box } from "@mui/system";
import React from "react";
import FooterRightItem from "./FooterRightItem";

const FooterRight = () => {
  const teamMembers = [
    {
      name: "김동현",
      url: "https://github.com/soulchicken",
    },
    {
      name: "김도현",
      url: "https://github.com/thovy",
    },
    {
      name: "김영광",
      url: "https://github.com/95Glory",
    },
    {
      name: "이세운",
      url: "https://github.com/Yiseun",
    },
  ];
  const Team = teamMembers.map((people) => (
    <FooterRightItem people={people} key={people.name} />
  ));
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      {Team}
    </Box>
  );
};

export default FooterRight;
