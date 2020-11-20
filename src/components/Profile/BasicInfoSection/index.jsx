import React from "react";

export default function BasicInfo({ data }) {
  console.log(data);
  return (
    <div>
      <h5>{data.imageUrl}</h5>
      <h6>{data.name}</h6>
      <p>{data.description}</p>
    </div>
  );
}
