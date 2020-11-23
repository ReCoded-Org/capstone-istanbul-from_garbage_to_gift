import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHolding,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function Steps(props) {
  const { t } = useTranslation();
  return (
    <Container className="00">
      <div className="steps">
        <div className={props.meet && "stepOne"} onClick={props.handleStep1}>
          <FontAwesomeIcon icon={faHandHolding} size="2x" />
          <h2>{t("applicationPageStep1.Step1")}</h2>
        </div>
        <hr />
        <div className={props.steps === "stepTwo" && "stepOne"}>
          <FontAwesomeIcon icon={faHandHoldingHeart} size="2x" />
          <h2>{t("applicationPageStep1.Step2")}</h2>
        </div>
      </div>
    </Container>
  );
}
