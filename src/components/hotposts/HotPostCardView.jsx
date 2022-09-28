import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Box,
  Link,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HotPost from "./HotPost";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../baseUrl";

const HotPostCardView = ({ handleRoute, view }) => {
  const [hotPosts, setHotPosts] = useState([]);

  function getHotPosts() {
    axios
      .get(`${BASE_URL}/api/v1/filter/list/post/desc/top`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log(response.data);
        setHotPosts(response.data);
      });
  }

  useEffect(() => {
    getHotPosts();
  }, []);

  const navigate = useNavigate();

  function handler(props) {
    navigate(`/post/${props}`, {
      state: {
        postId: props,
      },
    });
  }
  return (
    <CardContent>
      {view === "main" ? (
        <Grid container columnSpacing={5} rowSpacing={1} paddingX={2}>
          {hotPosts.map((post) => (
            <Grid item key={post.postId} md={4} xs={12}>
              <HotPost key={post.postId} post={post} handleRoute={handler} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container columnSpacing={5} rowSpacing={1} paddingX={2}>
          {hotPosts.map((post) => (
            <Grid item key={post.postId} xs={12}>
              <HotPost key={post.postId} post={post} handleRoute={handler} />
            </Grid>
          ))}
        </Grid>
      )}
    </CardContent>
  );
};

export default HotPostCardView;
