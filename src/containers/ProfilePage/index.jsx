import React, { useEffect, useState } from "react";
import "./index.css";
import { Row, Col } from "react-bootstrap";
import Info from "../../components/Profile/Info";
import RecentActivities from "../../components/Profile/RecentActivities";
import Biography from "../../components/Profile/Biography";
import db from "../../firebaseConfig";
import { useAuth } from "../../components/contexts/AuthContext";

export default function ProfilePageContiner() {
  const [userData, setUserData] = useState();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      const data = db
        .collection("userProfile")
        .doc(currentUser.uid)
        .onSnapshot((snapshot) => {
          const dataArr = [];
          dataArr.push({ ...snapshot.data() });
          setUserData(dataArr[0]);
        });
      return data;
    }
  }, [currentUser]);

  return (
    <div>
      <Row>
        <Col sm={12} md={3}>
          <div className="leftContainer">
            <Info userInfo={userData} />
          </div>
        </Col>
        <Col sm={12} md={9}>
          <div className="rightContainer d-flex flex-column align-items-center">
            <Biography userInfo={userData} />
            <RecentActivities />
          </div>
        </Col>
      </Row>
    </div>
  );
}
