import React from "react";
import "./index.css";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Member(props) {
  return (
    <Col md={4} className="memberCol">
      <img src={props.img} alt={props.name} className="teamMemberImg" />
      <h4>{props.name}</h4>
      <p className="memberTitle">{props.title}</p>
      <FontAwesomeIcon
        className="memberTitle"
        icon={faGithub}
        size="1.7x"
        onClick={props.gitHubLinks}
      />
    </Col>
  );
}
