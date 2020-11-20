import React from "react";
import Activity from "../Activity";

export default function Activities({ data }) {
  console.log(data);
  return (
    <div>
      <h2>Activities:</h2>
      {data.map((activity) => (
        <Activity activityData={activity} />
      ))}
    </div>
  );
}
