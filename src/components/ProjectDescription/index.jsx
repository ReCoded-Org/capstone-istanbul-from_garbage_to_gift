import React from "react";
import "./index.css";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import giftImg from "./giftImg.jpg";

export default function ProjectDescription() {
  const { t } = useTranslation();

  return (
    <Container fluid="md">
      <Row className="projectDescriptionRow">
        <Col md={6}>
          <img
            src={giftImg}
            alt="Team work"
            className="projectDescritionkImg"
          />
        </Col>
        <Col md={6}>
          <div className="projectDescriptionHeaderAndParagraph">
            <h1 className="projectDescriptionHeader">
              {t("projectDescription.header")}
            </h1>
            <p className="projectDescriptionParagraph">
              {t("projectDescription.paragraph")}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
