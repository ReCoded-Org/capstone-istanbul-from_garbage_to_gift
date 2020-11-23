import React from "react";
import "./index.css";

export default function ActivityCard({ cardInfo }) {
  return (
    <div className="singleActivityContainer">
      <img className="activityImg" src={cardInfo.imgUrl} alt="activity" />
      <div className="nameDescContainer">
        <h4 className="cardTitle">{cardInfo.title}</h4>
        <h5 className="cardDate">{cardInfo.date}</h5>
        <p className="cardDesc">{cardInfo.description}</p>
      </div>
    </div>
  );
}
