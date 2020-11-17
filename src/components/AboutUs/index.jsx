import React from "react";
import "./index.css";
import aboutImg from "./img/aboutImg.png";
import { Row } from "react-bootstrap";
import AboutCard from "../aboutUsCard";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();
  const aboutCardInfo = [...t("about.aboutUs", { returnObjects: true })];

  return (
    <div className="aboutCenter">
      <div className="aboutHeader">
        <h2>About Us</h2>
      </div>
      <Row>
        {aboutCardInfo.map((aboutCard, index) => (
          <AboutCard {...aboutCard} key={index} />
        ))}
      </Row>
      <div className="teamImgDiv">
        <img src={aboutImg} alt="about team img" className="aboutTeamImg" />
      </div>
    </div>
  );
}
