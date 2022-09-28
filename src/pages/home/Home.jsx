import React from "react";
import Featured from "../../components/featured/Featured";
import Searchbar from "../../components/searchbar/Searchbar";
import Footer from "../../components/footer/Footer";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import Header from "../../components/header/Header";
import HotArticle from "../../components/hotposts/HotPostCardView";
import HotAttraction from "../../components/hotattraction/HotAttraction";
import Wrapper from "./Wrapper";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleRoute = (props) => {
    navigate(`/${props}`);
  };

  return (
    <Container maxWidth="xl">
      <Header />
      <Container maxWidth="lg">
        <div className="homeContainer">
          <Featured />
          <Wrapper
            title="HOT POST"
            linkHandler={() => {
              handleRoute("board");
            }}
          >
            <HotArticle handleRoute={handleRoute} view="main" />
          </Wrapper>
          <Wrapper
            title="HOT ATTRACTION"
            linkHandler={() => {
              handleRoute("search/attraction");
            }}
          >
            <HotAttraction
              handleRoute={(attractionId) => {
                navigate(`/attraction/${attractionId}`, {
                  state: {
                    attractionId: attractionId,
                  },
                });
              }}
            />
          </Wrapper>
        </div>
        <Footer />
      </Container>
    </Container>
  );
};

export default Home;
