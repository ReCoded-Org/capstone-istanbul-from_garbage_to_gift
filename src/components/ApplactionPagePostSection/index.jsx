
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";


export default function PostSection(props) { 
    

  return (
    <Container className="postApplicationPage">
      <Row>
      <Col md={6}>
      <img className="postImageApplicationPage" src={props.image} alt="post"/>
      </Col>
      <Col className="postTitleDescription" md={6}>
      <h2 className="postTitle">{props.about}</h2>
      <p className="postDescription">{props.description}</p>
      <p className="postDescription">Date: {props.date}</p>
      </Col>
      </Row>
    </Container>
  );

}
  