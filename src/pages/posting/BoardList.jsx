import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../../baseUrl";

const BoardList = () => {
  const [boardLists, setBoardLists] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/board`).then((response) => {
      setBoardLists(response.data);
    });
  }, []);

  return <></>;
};

export default BoardList;
