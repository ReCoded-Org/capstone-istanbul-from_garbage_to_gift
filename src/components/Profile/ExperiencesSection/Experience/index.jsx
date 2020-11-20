import React from "react";

export default function Experience({ experienceData }) {
  console.log(experienceData);
  return (
    <div>
      <h5>{experienceData.companyName}</h5>
      <h6>{experienceData.role}</h6>
      <p>{experienceData.time}</p>
      <p>{experienceData.description}</p>
    </div>
  );
}
