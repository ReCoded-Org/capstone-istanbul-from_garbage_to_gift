import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./index.css";
import logo from "./img/logo.png";
import Logout from "../LoginPage/Logout";
import { useAuth } from "../../components/contexts/AuthContext";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import db from "../../firebaseConfig";

export default function SiteNavbar() {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const [userName, setUserName] = useState();

  let history = useHistory();

  function handleClickLogin() {
    history.push("/login");
  }

  function handleClickSignup() {
    history.push("/signup");
  }

  useEffect(() => {
    if (currentUser) {
      const fetchData = async () => {
        const res = await db.collection("userProfile").get();
        const data = res.docs.find(
          (doc) => (doc.data().userId === currentUser.uid)
        );
        setUserName(data.data().name);
      };
      fetchData();
    }
  }, []);

  //console.log(userData)

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

          {currentUser && (
            <Nav.Link href="/donate" className="navMainClass">
              {t("navbarsection.Donate")}
            </Nav.Link>
          )}

          <Nav.Link href="/about" className="navMainClass">
            {t("navbarsection.AboutUs")}
          </Nav.Link>
          <Nav.Link href="/contact" className="navMainClass">
            {t("navbarsection.ContactUs")}
          </Nav.Link>

          {currentUser && (
            <Nav.Link href="/profile" className="navMainClass">
              {t("navbarsection.myProfile")}
            </Nav.Link>
          )}
        </Nav>

        {currentUser ? (
          <>
            <div className="loggedInUserInfo">
              {t("navbarsection.welcome")} {userName}
            </div>
            <Logout />
          </>
        ) : (
          <>
            <Button onClick={handleClickLogin} className="navButtons">
              {t("navbarsection.LogIn")}
            </Button>
            <Button
              onClick={handleClickSignup}
              className="navButtons signUpLogoutButton"
            >
              {t("navbarsection.SignUp")}
            </Button>
          </>
        )}
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
