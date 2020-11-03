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
import { useTranslation } from 'react-i18next';
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

const menuData = {
  slogan: "",
  menu: ["Terms of Service", "Contact Us", "About", "Recent Posts"],
};



export default function Footer() {

  const  [t,i18n]  = useTranslation();
  const selectLanguage = (language) => {
    console.log('hello');
    if (language === 'tr') {
      i18n.changeLanguage('tr');
       document.documentElement.style.setProperty('direction', 'ltr'); 
    } else {
      i18n.changeLanguage(language);
       document.documentElement.style.setProperty('direction', 'ltr'); 
    }
  };

  return (
    <div>
      <Container fluid className="footer">
        <Row className="mainRow">

          <Col className="address">
            <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
            <div className="alignCenter">
              {contactData.address}
            </div> 
          </Col>
          <Col className="phone">
            <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
            <div className="phone">
              <div>
              {contactData.phone.phone1}
              </div>
              <div>
              {contactData.phone.phone2}
              </div>
            </div>
          </Col>
          <Col className="email">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            <div className="email">
              <div>
              {contactData.email.email1}
              </div>
              <div>
              {contactData.email.email2}
              </div>
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
