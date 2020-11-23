import React, { useState, useEffect } from "react";
import db from "../../firebaseConfig.js";
import SinglePostHeader from "../../components/SinglePostHeader";
import SinglePostContent from "../../components/SinglePostContent";
import SimilarPosts from "../../components/SimilarPosts";
import { useParams } from "react-router-dom";

export default function SinglePostPage() {
  const [currentPost, setCurrentPost] = useState({});
  const [similarPost, setSimilarPost] = useState([]);
  const [postType, setPostType] = useState([]);
  const { id } = useParams();

  const currentId = id;

  const fetchDataForDonate = async () => {
    let res = await db.collection("donatorPost").get();
    const data = res.docs.map((post) => {
      const tmp = post.data();
      const id = post.id;
      if (id === currentId) {
        setPostType("donatorPost");
        setCurrentPost({ ...tmp, id });
      }
      return tmp;
    });
    setSimilarPost(data);
  };

  const fetchDataforReceive = async () => {
    let res = await db.collection("recieverPost").get();
    const data = res.docs.map((post) => {
      const tmp = post.data();
      const id = post.id;
      if (id === currentId) {
        setPostType("recieverPost");
        setCurrentPost({ ...tmp, id });
      }
      return tmp;
    });
    setSimilarPost(data);
  };

  useEffect(() => {
    fetchDataForDonate();
    fetchDataforReceive();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="container">
      <SinglePostHeader postHeaderData={currentPost} postType={postType} />
      <SinglePostContent postContentData={currentPost} />
      <SimilarPosts similarPostData={similarPost} />
    </div>
  );
}
