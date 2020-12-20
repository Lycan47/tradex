import React, { useState, useEffect } from "react";
import "./Stats.css";
import axios from "axios";

const Token = "bvespvv48v6q4q15cd1g";
const BASE_URL = "https://finnhub.io/api/v1/quote?";

function Stats() {
  const [stocksData, setStocksData] = useState([]);
  const getStocksData = (stock) => {
    return axios
      .get(`${BASE_URL}symbol=${stock}&token=${Token}`)
      .catch((error) => {
        console.error("Error", error.message);
      });
  };

  useEffect(() => {
    let tempStocksData = [];
    const stocksList = [
      "AAPL",
      "MSFT",
      "TSLA",
      "FB",
      "BABA",
      "UBER",
      "DIS",
      "SBUX",
    ];
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock).then((res) => {
          tempStocksData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });

    //promise chaining
    Promise.all(promises).then(() => {
      setStocksData(tempStocksData);
      console.log(tempStocksData);
    });
  }, []);

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">{/* Our Current Stocks details */}</div>
        </div>
        <div className="stats__header">
          <p>Recommended Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">{/* Recommended Stocks details */}</div>
        </div>
      </div>
    </div>
  );
}
export default Stats;
