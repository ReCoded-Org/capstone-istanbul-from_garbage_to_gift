import React, { useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import db from "../../firebaseConfig";
import { useTranslation } from "react-i18next";
import "./index.css";

export default function ReceiverForm() {
  const [receiverPostData, setReceiverPostData] = useState({});

  const handlePostChange = (e, key) => {
    setReceiverPostData({ ...receiverPostData, [key]: e.target.value });
    console.log(receiverPostData);
  };

  const { t } = useTranslation();

  const addReceiverPost = (e) => {
    e.preventDefault();
    db.collection("receiverPost").add({
      title: receiverPostData.title,
      type: receiverPostData.type,
      description: receiverPostData.description,
      prerequisites: receiverPostData.prerequisites,
      profileName: receiverPostData.profileName,
      about: receiverPostData.about,
      address: receiverPostData.address,
      date: receiverPostData.date,
    });
  };

  return (
    <Container>
      <Form onSubmit={addReceiverPost}>
        <Form.Group>
          <Form.Label>{t("formsection.DonationType")}</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => handlePostChange(e, "type")}
          >
            <option value="technology">
              {t("formsection.DonationOption1")}
            </option>
            <option value="education">
              {t("formsection.DonationOption2")}
            </option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>{t("formsection.PostTitle")}</Form.Label>
          <Form.Control
            type="text"
            placeholder={t("formsection.PostTitle")}
            onChange={(e) => handlePostChange(e, "title")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>{t("formsection.PostDetailsForReceiver")}</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => handlePostChange(e, "description")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>{t("formsection.Prerequisites")}</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => handlePostChange(e, "prerequisites")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>{t("formsection.ProfileName")}</Form.Label>
          <Form.Control
            type="text"
            placeholder={t("formsection.ProfileName")}
            onChange={(e) => handlePostChange(e, "profileName")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>{t("formsection.AboutYou")}</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => handlePostChange(e, "about")}
          />
        </Form.Group>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>{t("formsection.City")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("formsection.City")}
                onChange={(e) => handlePostChange(e, "address")}
              />
            </Col>
            <Col>
              <Form.Label>{t("formsection.ApplicationDate")}</Form.Label>
              <br />
              <Form.Control
                type="date"
                onChange={(e) => handlePostChange(e, "date")}
              />
            </Col>
          </Row>
        </Form.Group>
        <Row className="justify-content-md-center">
          <Button
            className="submitButton"
            type="submit"
            variant="outline-light"
          >
            {t("formsection.Submit")}
          </Button>
        </Row>
      </Form>
    </Container>
  );
}
