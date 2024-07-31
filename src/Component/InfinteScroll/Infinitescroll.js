import React, { useEffect, useState } from "react";
import "./Infinite.css";

const Infinitescroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(10)

  const dat = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${page}&select=title,price`
    );
    const dta = await res.json();
    const dt = await dta.products
    console.log(dt);
    setData((prevdata) => [...prevdata, ...dt])
  };

  const handleScroll = (e) => {
    setPage((prev) => prev+1)

    console.log("window", window.innerHeight)
  }

  useEffect(() => {
    dat();
  }, [page]);

  useEffect(() => {
    document.getElementById("container").addEventListener("scrollend", handleScroll)
    return () => {
      document.getElementById("container").removeEventListener("scrollend", handleScroll)
    }
  }, []);

  return (
    <div className="mainCont" id="container">
      {data?.map((val, index) => {
        return (
          <div className="card" id="card">
            <div className="title">{val.title}</div>
            <div className="price">{val.price}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Infinitescroll;
