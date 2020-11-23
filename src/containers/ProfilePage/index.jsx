import React, { useEffect, useState } from "react";
import "./index.css";
import { Row, Col } from "react-bootstrap";
import profileData from "./mockData";
import Info from "../../components/Profile/Info";
import RecentActivities from "../../components/Profile/RecentActivities";
import Biography from "../../components/Profile/Biography";
import db from "../../firebaseConfig";
import { useAuth } from "../../components/contexts/AuthContext";
export default function ProfilePageContiner() {
  const [userData, setUserData] = useState();
  const { currentUser } = useAuth();

  const fetchData = async () => {
    const res = await db.collection("userProfile").get();
    const data = res.docs.find((doc) => doc.data().userId === currentUser.uid);
    setUserData(data.data());
  };
  //console.log(userData)
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Row>
        <Col sm={3}>
          <div>
            <Info userInfo={userData} />
          </div>
        </Col>
        <Col sm={9}>
          <div className="rightContainer d-flex flex-column align-items-center">
            <Biography userInfo={userData} />
            <RecentActivities />
          </div>
        </Col>
      </Row>
    </div>
  );
}
