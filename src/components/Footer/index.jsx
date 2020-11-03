import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Image from "react-bootstrap/Image";
import "./index.css";
import WhiteLogo from "./whiteLogo.png";

const contactData = {
  address: "9094 Bay Meadows Street Conyars, GA 30012",
  phone: {
    phone1: "+229-955-5388-336",
    phone2: "+229-955-5373-360",
  },
  email: {
    email1: "office@mail.com",
    email2: "support@mail.com",
  },
};

export default function Footer() {
  return (
    <div>
      <Container fluid className="footer">
        <Row className="mainRow">
          <Col className="address">
            <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
            <div className="alignCenter">{contactData.address}</div>
          </Col>
          <Col className="phone">
            <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
            <div className="phone">
              <div>{contactData.phone.phone1}</div>
              <div>{contactData.phone.phone2}</div>
            </div>
          </Col>
          <Col className="email">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            <div className="email">
              <div>{contactData.email.email1}</div>
              <div>{contactData.email.email2}</div>
            </div>
          </Col>
          <Col className="logo">
            <Image src={WhiteLogo} alt="logo" width="160px" height="90px" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
