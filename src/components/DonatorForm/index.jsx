import React, { useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import db from "../../firebaseConfig";
import { useTranslation } from "react-i18next";
import "./index.css";

export default function DonatorForm() {
  const [donatorPostData, setDonatorPostData] = useState({});

  const handlePostChange = (e, key) => {
    setDonatorPostData({ ...donatorPostData, [key]: e.target.value });
  };
  const { t } = useTranslation();

  const addDonatorPost = (e) => {
    e.preventDefault();
    db.collection("donatorPost").add({
      title: donatorPostData.title,
      type: donatorPostData.type,
      description: donatorPostData.description,
      target: donatorPostData.target,
      profileName: donatorPostData.profileName,
      about: donatorPostData.about,
      address: donatorPostData.address,
      date: donatorPostData.date,
    });
  };

  return (
    <div>
      <Container>
        <Form onSubmit={addDonatorPost}>
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
            <Form.Label>{t("formsection.PostDetailsForDonator")}</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => handlePostChange(e, "description")}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>{t("formsection.TargetGroup")} </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => handlePostChange(e, "target")}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>{t("formsection.ProfileName")} </Form.Label>
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
    </div>
  );
}
