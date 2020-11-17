import React from "react";
import target from "./images/target.jpg";
import { Row, Col, Container } from "react-bootstrap";
import "./index.css";

export default function WhoWeAre() {
  return (
    <Container fluid="md" className="whoWeAre">
      <Row className="targetText">
        <Col md={6}>
          <h2 className="targetHeader">Website Mission</h2>
          <p className="targetParagraph">
            Providing the linkage between the people who are willing to donate
            from their stuff and people who needs these stuff and make sure that
            we deliver the donation to the most vulnerable people.
          </p>
        </Col>

        <Col md={6}>
          <img src={target} alt="Target" className="whoWeAreImage"></img>
        </Col>
      </Row>

      <Row>
        <Col>
          <h1 className="whoWeAreTitle">How it Works?</h1>
        </Col>
      </Row>

      <Row className="innerVideo">
        <iframe
          height="400em"
          width="600em"
          src="https://www.youtube.com/embed/9Fev-hRCR-8"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="How It Works?"
        ></iframe>
      </Row>
    </Container>
  );
}
