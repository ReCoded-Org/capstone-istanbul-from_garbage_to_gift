import React from "react";
import SuccessStories from "../../components/SuccessStories";
import WhoWeAre from "../../components/WhoWeAre";
import ProjectDescription from "../../components/ProjectDescription";

export default function Home() {
  return (
    <div className="container">
      <ProjectDescription />
      <WhoWeAre />
      <SuccessStories />
    </div>
  );
}
