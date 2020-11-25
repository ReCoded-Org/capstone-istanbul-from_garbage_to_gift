import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./index.css";
import logo from "./img/logo.png";
import languageIcon from "./img/languageIcon.png";
import Logout from "../LoginPage/Logout";
import { useAuth } from "../../components/contexts/AuthContext";
import db from "../../firebaseConfig";
import {
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
  Button,
  NavDropdown,
} from "react-bootstrap";

export default function SiteNavbar() {
  const { t, i18n } = useTranslation();
  const { currentUser } = useAuth();
  const [userName, setUserName] = useState();

  let history = useHistory();

  function handleClickLogin() {
    history.push("/login");
  }

  function handleClickSignup() {
    history.push("/signup");
  }
  const selectLanguage = (language) => {
    if (language === "ar") {
      i18n.changeLanguage("ar");
      document.documentElement.style.setProperty("direction", "rtl");
    } else {
      i18n.changeLanguage(language);
      document.documentElement.style.setProperty("direction", "ltr");
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const LANG_SPECS = [
    {
      code: "ar",
      name: "AR",
    },
    {
      code: "en",
      name: "En",
    },
    {
      code: "tr",
      name: "TR",
    },
  ];

  useEffect(() => {
    if (currentUser) {
      const fetchData = async () => {
        const res = await db.collection("userProfile").get();
        const data = res.docs.find((doc) => {
          console.log(doc.data());
          return doc.data().userId === currentUser.uid;
        });
        console.log(data);
        setUserName(data ? data.data().name : "");
      };
      fetchData();
    }
  }, [currentUser]);

  //console.log(userData)
  //console.log(currentUser.uid)
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

          {currentUser && (
            <Nav.Link href="/donate" className="navMainClass">
              {t("navbarsection.Donate")}
            </Nav.Link>
          )}

          {currentUser && (
            <>
              <NavDropdown
                title={t("navbarsection.Posts")}
                className="dropdownNavbar"
              >
                <NavDropdown.Item
                  className="navDropdownItem"
                  href="/donatePosts"
                >
                  {t("navbarsection.DonationPosts")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="navDropdownItem"
                  href="/receivePosts"
                >
                  {t("navbarsection.ReceivingPosts")}
                </NavDropdown.Item>
              </NavDropdown>
            </>
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
        <DropdownButton
          alignRight
          variant="none"
          className="languageIcon"
          title={
            <img
              src={languageIcon}
              className="languageIconImg"
              alt="Language icon"
            />
          }
        >
          {LANG_SPECS.map((lang) => {
            return (
              <Dropdown.Item
                as="button"
                key={lang.code}
                onClick={() => {
                  selectLanguage(lang.code);
                }}
              >
                {lang.name}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
      </Navbar.Collapse>
    </Navbar>
  );
}
