import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./index.css";
import friendsBox from "../assets/friendsBox.jpg";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function Signup() {
  const { t } = useTranslation();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // eslint-disable-next-line consistent-return
  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError(t("loginPages.signup.passNotMatch"));
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError(t("loginPages.signup.failCreateAcc"));
    }
    setLoading(false);
  }

  return (
    <>
      <Container
        className="d-flex flex-column justify-content-center"
        style={{ minHeight: "10em" }}
      >
        <Card className="neumorphism" style={{ marginTop: "10em" }}>
          <Card.Body className="purpleElemSignUp">
            <h2 className="text-center mb-4 purpleElemSignUp">
              {t("loginPages.signup.signUp")}
            </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="purpleElemSignUp" id="userName">
                <Form.Label>{t("loginPages.signup.name")}</Form.Label>
                <Form.Control
                  className="purpleElemSignUp"
                  type="text"
                  required
                />
              </Form.Group>
              <Form.Group id="userSurname">
                <Form.Label>{t("loginPages.signup.surname")}</Form.Label>
                <Form.Control
                  className="purpleElemSignUp"
                  type="text"
                  required
                />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>{t("loginPages.signup.email")}</Form.Label>
                <Form.Control
                  className="purpleElemSignUp"
                  type="email"
                  ref={emailRef}
                  required
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>{t("loginPages.signup.password")}</Form.Label>
                <Form.Control
                  className="purpleElemSignUp"
                  type="password"
                  ref={passwordRef}
                  required
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>
                  {t("loginPages.signup.passwordConfirm")}
                </Form.Label>
                <Form.Control
                  className="purpleElemSignUp"
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              <Button
                disabled={loading}
                className="w-100 signUpBtn"
                type="submit"
              >
                {t("loginPages.signup.getStarted")}
              </Button>
            </Form>
            <div className="w-100 text-start mt-3 purpleElemSignUp">
              {t("loginPages.signup.haveAnAccount")}{" "}
              <Link className="greenElemSignUp" to="/login">
                {t("loginPages.signup.logIn")}
              </Link>
            </div>
          </Card.Body>
        </Card>

        <img
          className="friendsBoxImg"
          src={friendsBox}
          alt="friends around gifts"
          width="80%"
        />
      </Container>
    </>
  );
}
