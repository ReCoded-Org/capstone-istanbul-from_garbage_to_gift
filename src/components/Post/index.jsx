/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { useTranslation } from "react-i18next";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

export default function PostVolunteer(postInfo) {
  const { t } = useTranslation();

  if (
    postInfo.postInfo &&
    postInfo.postInfo.date &&
    postInfo.postInfo.title &&
    postInfo.postInfo.image
  ) {
    return (
      <Col className="singlePost" lg={3} sm={12} md={6}>
        <Link to={"posts/" + postInfo.postInfo.id}>
          <p className="cardTitle text-center">{postInfo.postInfo.title}</p>
          <p className="postDate">Date: {postInfo.postInfo.date}</p>
          <p className="postName">By : {postInfo.postInfo.profileName}</p>
          <p className="cardBody text-center">
            {postInfo.postInfo.description}
          </p>
          <img
            className="cardImg"
            src={postInfo.postInfo.image}
            alt={t("postPage.altVolunteerHeader")}
          />
        </Link>
      </Col>
    );
  }
  return (
    <iframe
      title="load"
      src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW"
      width="480"
      height="480"
    />
  );
}
