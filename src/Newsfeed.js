import React from "react";
import "./Newsfeed.css";
import LineGraph from "./LineGraph";

function Newsfeed() {
  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chartSection">
          <div className="newsfeed__portfolio">
            <h1>₹1,39,761</h1>
            <p>+₹2,052(1.38%) Today</p>
          </div>
          <div className="newsfeed__chart">
            <LineGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
