import React from "react";

export default function Skills({ data }) {
  return (
    <div>
      <h2>Skills:</h2>
      {data.map((skill) => (
        <p>{skill}</p>
      ))}
    </div>
  );
}
