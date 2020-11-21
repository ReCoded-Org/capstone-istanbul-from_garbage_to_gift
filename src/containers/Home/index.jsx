import React from "react";
import SuccessStories from "../../components/SuccessStories";
import WhoWeAre from "../../components/WhoWeAre";

export default function Home() {
  return (
    <div className="container">
      <WhoWeAre />
      <SuccessStories />
    </div>
  );
}
