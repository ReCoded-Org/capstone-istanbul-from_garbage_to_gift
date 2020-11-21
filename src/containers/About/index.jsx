import React from "react";
import { Container } from "react-bootstrap";
import AboutUs from "../../components/AboutUs";
import OurTeam from "../../components/OurTeam";

export default function About() {
  return (
    <Container>
      <AboutUs />
      <OurTeam />
    </Container>
  );
}
