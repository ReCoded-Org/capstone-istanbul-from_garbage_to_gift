import React from "react";
import "./index.css";
import gift from "./gift.jpg";
import { Container, Row, Col } from "react-bootstrap";

export default function ProjectDescription() {
  return (
    <Container fluid="md">
      <Row className="row">
        <Col md={6}>
          <img src={gift} alt="Team work" className="teamWorkImg"></img>
        </Col>
        <Col md={6}>
          <div className="projectDescription">
            <h1>
              Gifting your unnecessary stuff might rescue someone else's life
            </h1>
          </div>
          <div className="projectDescription">
            <p>
              You can participate in changing the world by donating your
              unnecessary stuff to people in need, whatever your stuff is it
              might rescue the other people lives or better their lives at
              least, So don't throw out your un need stuff in the garbage, just
              give them to us and we will deliver them to whom in need{" "}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
