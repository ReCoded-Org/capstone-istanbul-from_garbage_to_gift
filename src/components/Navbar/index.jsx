import React from "react";
import { useTranslation } from "react-i18next";
import "./index.css";
import logo from "./img/logo.png";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export default function SiteNavbar() {
  const { t } = useTranslation();
  return (
    <Navbar expand="lg" className="navMainClass">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo" className="logoImg" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" className="navMainClass">
            {t("navbarsection.Home")}
          </Nav.Link>
          <Nav.Link href="/posts" className="navMainClass">
            {t("navbarsection.Posts")}
          </Nav.Link>
          <Nav.Link href="/donate" className="navMainClass">
            {t("navbarsection.Donate")}
          </Nav.Link>
          <Nav.Link href="/about" className="navMainClass">
            {t("navbarsection.AboutUs")}
          </Nav.Link>
          <Nav.Link href="/contact" className="navMainClass">
            {t("navbarsection.ContactUs")}
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            className="searchField"
            type="text"
            placeholder={t("navbarsection.SearchHere")}
          />
        </Form>

        <Button className="navButtons">{t("navbarsection.Search")}</Button>
        <Button className="navButtons">{t("navbarsection.LogIn")}</Button>
        <Button className="navButtons signUpButton">
          {t("navbarsection.SignUp")}
        </Button>

        <NavDropdown
          title="EN"
          id="basic-nav-dropdown"
          className="navMainClass"
        >
          <NavDropdown.Item href="#EN">EN</NavDropdown.Item>
          <NavDropdown.Item href="#AR">TR</NavDropdown.Item>
          <NavDropdown.Item href="#TR">AR</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
}
