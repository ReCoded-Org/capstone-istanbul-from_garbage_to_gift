import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

export default function PostSectionStepOne(props) {
  const { t } = useTranslation();
  return (
    <Container>
      <Row className="stepOneApplicationPage">
        <Col md={4}>
          <h2 className="prerequisites">
            {props.prerequisites
              ? t("applicationPageStep1.Prerequisites")
              : t("applicationPageStep1.target")}
          </h2>
          <p>{props.prerequisites ? props.prerequisites : props.target}</p>
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
            {t("applicationPageStep1.Meet")}
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
