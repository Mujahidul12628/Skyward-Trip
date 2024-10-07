"use client";
import React, { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((dataa) => {
  //         console.log("Fetched Data:", dataa);
  //         setData(dataa);
  //       })
  //       .catch((error) => console.error("Error fetching data:", error));
  //   }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const dataa = await res.json();
      console.log(dataa);
      setData(dataaa);
    } catch {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>Post Data {data.length}</h3>
    </div>
  );
};
export default Data;
