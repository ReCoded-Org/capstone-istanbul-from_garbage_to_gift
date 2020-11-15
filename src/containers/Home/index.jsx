import React from "react";
import ProjectDescription from "../../components/ProjectDescription";
import SuccessStories from "../../components/SuccessStories";

export default function Home() {
  return (
    <div className="container">
      <ProjectDescription />
      <SuccessStories />
    </div>
  );
}
