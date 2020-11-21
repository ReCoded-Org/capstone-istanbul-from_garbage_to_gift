import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

export default function PostSectionStep1(props) {
  const { t } = useTranslation();
  return (
    <Container className="00">
      <Row className="">
        <Col md={4}>
          <h2 className="prerequisites">Prerequisites</h2>
          <ul>
            {props.prerequisites &&
              props.prerequisites.map((prerequisity) => (
                <li className="prerequisitesDescription">{prerequisity}</li>
              ))}
          </ul>
          <input
            type="checkbox"
            name="radiobutton"
            value={!props.meet}
            onChange={props.handleMeetSteps}
          />
          <label
            htmlFor="radiobutton"
            className=" prerequisitesDescription meet"
          >
            I meet these prerequisities
          </label>
        </Col>
        <Col md={8} className="stepOneDiv">
          {props.meet && (
            <Button
              className="navButtons nextButton"
              onClick={props.handleSteps}
            >
              {t("applicationPageStep1.Next")}
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}
