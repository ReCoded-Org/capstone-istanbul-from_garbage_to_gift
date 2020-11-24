import React from "react";
import Login from "../../components/LoginPage/Login";
import { Container } from "react-bootstrap";
import "./index.css";

export default function LoginContainer() {
  return (
    <div>
      <Container
        className="d-flex flex-column justify-content-center loginContainer"
        style={{ minHeight: "10em" }}
      >
<<<<<<< HEAD
        <div>
          <Login />
        </div>
=======
        <Login />
        <img
          src={friendsBox}
          alt="friends around gifts"
          className="loginImage"
          width="70%"
        />
>>>>>>> 22a1d46d284eeedcf85d0fc6a659ad93c2e4cf5e
      </Container>
    </div>
  );
}
