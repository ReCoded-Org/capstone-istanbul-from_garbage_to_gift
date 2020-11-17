
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import db from "../../firebaseConfig";
import "./index.css";


export default function PostSection(props) { 
    
const [post, setPost] = useState("")

const fetchData = async ()=>{
    const res = await db.collection('recieverPost').doc('ETXSQQswYmM2vx0qODfr').get()
    const data = res.data()
    console.log(data);
    setPost(data)
}
useEffect(()=>{
    fetchData()
},[])
  return (
    <Container className="postApplicationPage">
      <Row>
      <Col md={6}>
      <img className="postImageApplicationPage" src={post.image} alt="post"/>
      </Col>
      <Col className="postTitleDescription" md={6}>
      <h2 className="postTitle">{post.about}</h2>
      <p className="postDescription">{post.description}</p>
      <p className="postDescription">Date: {post.date}</p>
      </Col>
      </Row>
    </Container>
  );

}
  