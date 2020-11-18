import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import { Row } from "react-bootstrap";
import TeamCard from "../TeamMember";
import betul from "./imgs/betul.png";
import Knar from "./imgs/knar.png";
import luey from "./imgs/luey.png";
import ola from "./imgs/ola.png";
import orcun from "./imgs/orcun.png";
import ammar from "./imgs/ammar.png";

export default function OurTeam() {
  const { t } = useTranslation();
  const teamImgs = [luey, ola, Knar, betul, orcun, ammar];
  const teamInfo = [...t("about.team", { returnObjects: true })];
  const team = teamInfo.map((member, index) => {
    return { ...member, img: teamImgs[index] };
  });
  return (
    <div>
      <div>
        <h2 className="teamSection">Our Team</h2>
        <p className="teamSection teamParagraph">
          Home is behind, the world ahead and there are many paths to tread
          through shadows to the edge.
        </p>
      </div>
      <Row>
        {team.map((teamMember, index) => (
          <TeamCard {...teamMember} key={index} />
        ))}
      </Row>
    </div>
  );
}
