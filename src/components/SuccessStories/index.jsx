import React from "react";
import "./index.css";
import { Row, Col, Container } from "react-bootstrap";

const data = [
  {
    time: "One week ago",
    description:
      "Ahmed gave blankets he didn't need it to vulnerable family last winter, by this he participate in reducing the harsh winter season cold.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu9sbpuDCREIss1uBnJ5AE6Ggyyc9PtA6ttg&usqp=CAU",
    id: 1,
  },
  {
    time: "Two weeks ago",
    description:
      "Musicians, actors and influencers plan social media takeover to support #MarchForOurLives",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMKzI_IJS7u0bpB4qQTFdW4yztlQ0mYoq3pg&usqp=CAU",
    id: 2,
  },
  {
    time: "One month ago",
    description: "Ammar donated his computer to a high school student.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQayyYmKyYJ18CTiOSpcLV3SCiCP65Bp8Cu2w&usqp=CAU",
    id: 3,
  },
];

export default function SuccessStories() {
  return (
    <Container>
      <h1 className="text-center title">Sucess Stories</h1>
      <p className="text-center title">
        We succeed to deliver the happiness to more than 1000 person, help us to
        increase the number <br /> and participate in changing the world
      </p>
      <Row className="justify-content-md-center">
        {data.map((singleData) => {
          return (
            <Col
              className="successStoriesSinglePost"
              lg={3}
              sm={12}
              key={singleData.id}
            >
              <p className="successStoriesCardTitle text-center">
                {singleData.time}
              </p>
              <div className="successStoriesCardBody">
                <p className="text-center">{singleData.description}</p>
                <img src={singleData.image} alt="" />
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
