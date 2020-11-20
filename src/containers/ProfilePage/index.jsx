import React from "react";
import "./index.css";
import { Row, Col } from "react-bootstrap";
import profileData from "./mockData";
import BasicInfo from "../../components/Profile/BasicInfoSection";
import Skills from "../../components/Profile/SkillsSection";
import Activities from "../../components/Profile/ActivitiesSection/Activities";
import Experiences from "../../components/Profile/ExperiencesSection/Experiences";

export default function ProfilePageContiner() {
  console.log(profileData);
  // const [profileInfo, setProfileInfo] = useState();

  // const addItem = () => {
  //   db.collection("notes").doc().set({
  //     title: noteFormState.title,
  //     content: noteFormState.content,
  //   });
  // };

  // useEffect(() => {
  //     const data = db.collection("cities").doc("t4WuvpE4DCzN9vLajZjK")
  //     .onSnapshot(function(doc) {
  //         console.log("Current data: ", doc.data());
  //     });
  //     console.log(data);
  //   }, []);

  //   console.log(profileInfo);

  return (
    <div>
      <Row>
        <Col sm={4}>
          <div>
            <BasicInfo data={profileData.basicInfo} />
          </div>
        </Col>
        <Col sm={8}>
          <div>
            <Skills data={profileData.skills} />
            <Activities data={profileData.activities} />
            <Experiences data={profileData.professionalExperience} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
