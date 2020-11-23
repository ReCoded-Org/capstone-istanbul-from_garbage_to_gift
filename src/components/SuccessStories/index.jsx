/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./index.css";
import { Row, Container } from "react-bootstrap";
import Post from "../Post/index.jsx";
// eslint-disable-next-line import/extensions
import db from "../../firebaseConfig.js";

export default function SuccessStories() {
  const [stories, setStories] = useState([]);

  const { t } = useTranslation();

  const fetchData = async () => {
    const res = await db.collection("donatorPost").get();

    const data = res.docs.map((post) => {
      const tmp = post.data();
      const id = post.id;
      return { id, ...tmp };
    });
    setStories(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="successStoriesContaier">
      <p className="text-center successTitle">{t("successStories.header")}</p>
      <p className="text-center successParagraph">
        {t("successStories.paragraph")}
      </p>
      <Row className="postsSuccessStories" fluid="md">
        {stories
          .map((singleData) => <Post postInfo={singleData} />)
          .slice(0, 3)}
      </Row>
    </Container>
  );
}
