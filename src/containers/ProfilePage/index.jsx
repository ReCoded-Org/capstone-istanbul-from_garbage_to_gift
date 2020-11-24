import React, { useEffect, useState } from "react";
import "./index.css";
import { Row, Col } from "react-bootstrap";
import Info from "../../components/Profile/Info";
import RecentActivities from "../../components/Profile/RecentActivities";
import Biography from "../../components/Profile/Biography";
import db from "../../firebaseConfig";
import { useAuth } from "../../components/contexts/AuthContext";
import Edit from "./edit";
export default function ProfilePageContiner() {
  const [userData, setUserData] = useState();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      const unsubscribe = db
        .collection("userProfile")
        .doc(currentUser.uid)
        .onSnapshot((snapshot) => {
          const dataArr = [];
          dataArr.push({ ...snapshot.data() });
          setUserData(dataArr[0]);
        });
      return unsubscribe;
    }
  }, []);

  console.log(userData);
  console.log("userData");
  return (
    <div>
      <Row>
        <Col sm={12} md={3}>
          <div>
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

// const fetchData = async () => {
//   const res = await db.collection("userProfile").get();
//   const data = res.docs.find((doc) => doc.data().userId === currentUser.uid);
//   setUserData(data.data());
// };

// useEffect(() => {
//   fetchData();
// }, []);
