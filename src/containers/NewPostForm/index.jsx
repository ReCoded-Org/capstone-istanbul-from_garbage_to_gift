import React, { useState } from "react";
import ReceiverForm from "../../components/ReceiverForm";
import DonatorForm from "../../components/DonatorForm";
import { Container, ToggleButton, ButtonGroup, Row } from "react-bootstrap";
import Logo from "../../logo.png";
import { useTranslation } from "react-i18next";
import "./index.css";

export default function Form() {
  const [radioValue, setRadioValue] = useState("DonatorForm");

  const { t } = useTranslation();

  const radios = [
    { name: t("formsection.Receive"), value: "ReceiverForm" },
    { name: t("formsection.Donate"), value: "DonatorForm" },
  ];

  return (
    <Container className="formContent">
      <Row className="justify-content-md-center">
        <img src={Logo} alt="fortune-found" className="formLogo" />
      </Row>
      <Row className="justify-content-md-center">
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="secondary"
              className="toggle"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Row>
      <Row className="justify-content-md-center description">
        {radioValue === "ReceiverForm" ? (
          <h3>Fill the Form to Find a Correct Receiver</h3>
        ) : (
          <h3>Fill the Form to Find a Correct Donator</h3>
        )}
      </Row>
      {radioValue === "ReceiverForm" ? <ReceiverForm /> : <DonatorForm />}
    </Container>
  );
}
