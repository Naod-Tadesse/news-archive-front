import React, { useEffect, useState } from "react";
import NewsApi from "../services/News-api";
import Grid from "../components/Grid";

const newsApi = new NewsApi("/top-headlines");

export default function News() {
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const fetchApi = () => {
    console.log("starting");
    newsApi
      .getAll({
        sources: "bbc-news", // Pass query parameters as an object
      })
      .then((response) => {
        setData(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });

    newsApi
      .getAll({
        country: "us", // Pass query parameters as an object
      })
      .then((response) => {
        console.log(response.data);
        setData1(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="pt-7">
      {data && <Grid data={data} />}
      {data1 && <Grid data={data1} />}
    </div>
  );
}
