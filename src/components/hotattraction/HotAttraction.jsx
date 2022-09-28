import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Box,
  Link,
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../../baseUrl";
import ContentCard from "./ContentCard";

const HotAttraction = ({ handleRoute }) => {
  const [hotAttractions, setHotAttractions] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/v1/filter/list/attraction/desc/top`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log(response.data);
        setHotAttractions(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          console.log("첫번째 에러");
          console.log(error.response.data);
        } else if (error.request) {
          // 요청이 이루어 졌으나 응답을 받지 못했습니다.
          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          // Node.js의 http.ClientRequest 인스턴스입니다.
          console.log("두번째 에러");
          console.log(error.request);
        } else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
          console.log("세번째 에러");
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }, []);

  return (
    <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
      {/* {hotAttractions.map((attraction) => (
        <ContentCard
          key={attraction.attractionId}
          attraction={attraction}
          handleRoute={() => handleRoute(attraction.attractionId)}
        />
      ))} */}
    </CardContent>
  );
};

export default HotAttraction;
