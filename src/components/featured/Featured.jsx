import React from "react";
import "./featured.css";
import Carousel from "react-material-ui-carousel";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

const Featured = () => {
  // 캐러셀 이미지 모음
  const images = [
    {
      src: "https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg",
    },
    {
      src: "https://cdn.pressian.com/_resources/10/2021/06/09/2021060911533184690_l.jpg",
    },
    {
      src: "https://t1.daumcdn.net/cfile/tistory/99128B3E5AD978AF20",
    },
  ];

  return (
    <>
      <div className="carouselContainer">
        <div className="carouselWrapper">
          <Carousel
            // fullHeightHover={false} // We want the nav buttons wrapper to only be as big as the button element is
            indicators={true}
            animation="fade"
            autoPlay={true}
            navButtonsAlwaysVisible={true}
            NavButton={({ onClick, next, prev }) => {
              // Other logic

              return (
                <Button
                  onClick={onClick}
                  color="secondary"
                  sx={{
                    top: "51vh",
                    marginLeft: "5rem",
                    marginRight: "5rem",
                    color: "#892CDC",
                    fontSize: "0.8rem",
                    width: "2rem",
                    borderRadius: "0.6rem",
                    cursor: "pointer",
                    "&:hover": {
                      opacity: "1",
                    },
                  }}
                >
                  {next && "Next"}
                  {prev && "Prev"}
                </Button>
              );
            }}
            sx={{
              paddingBottom: "10px",
            }}
          >
            {images.map((image) => (
              <img
                src={image.src}
                alt="이미지"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "50vh",
                }}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Featured;
