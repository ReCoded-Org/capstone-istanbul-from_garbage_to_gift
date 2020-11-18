import React from "react";
import AboutUs from "../../components/AboutUs";
import OurTeam from "../../components/OurTeam";
import { Container } from "react-bootstrap";

export default function About() {
  return (
    <Container>
      <AboutUs />
      <OurTeam />
    </Container>
  );
}
