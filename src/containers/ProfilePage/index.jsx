import React, {useState, useEffect} from 'react'
import ProfileDescription from "../../components/Profile/ProfileDescription"
import Activities from "../../components/Profile/Activities"
import Experience from "../../components/Profile/Experience"
import Pinned from "../../components/Profile/Pinned"
import "./index.css"
import {Col, Row} from 'react-bootstrap'
import db from "../../firebaseConfig"
export default function ProfilePageContiner() {


    const [profileInfo, setProfileInfo] = useState();


    // const addItem = () => {
    //   db.collection("notes").doc().set({
    //     title: noteFormState.title,
    //     content: noteFormState.content,
    //   });
    // };

    useEffect(() => {
        const profileInfo = db.collection("userProfileInfo").onSnapshot((snapshot) => {
          const dataArr = [];
          snapshot.forEach((doc) => {
            dataArr.push({ ...doc.data(), id: doc.id });
          });
          console.log(dataArr);
          setProfileInfo(dataArr);
        });
        return profileInfo;
      }, []);


    return (
        <div>
            {/* <Row>
            <Col sm={4}>
                <div>
                <ProfileDescription description={profileData.description} />
                </div>
            </Col>
            <Col  sm={8}>
             <div>
                <Pinned pinned={profileData.pinned} />
                <Activities activities={profileData.activities} />
                <Experience experience={profileData.professionalExperience} />
             </div>
            </Col>
            </Row> */}
        </div>
    )
}



// const profileData = {
    
//     basicInfo: {
//         imageUrl: "https://res.cloudinary.com/dk2ghb1pg/image/upload/v1535301733/bxoyfrkj4zwtbsewcryf.png",
//         name : "Ammar Sammour",
//         description : "Voluntarily teaching coding"
//     },

//     skills: ["Technology", "Education", "Software", "Web Design", "Greatness", "Friend"],

//     activities: [
//         {
//             name: "ReCoded",
//             date: "May 2018 - June 2021",
//             description: "Giving lecture for high school",
//         },
//         {
//             name: "Flatiron",
//             date: "May 2018 - June 2021",
//             description: "Giving lecture for bootcamps",
//         },
//     ],

//     professionalExperience: [
//         {
//             companyName: "ReCoded",
//             role: "Instructor",
//             time: "Since 2018",
//             description: "Instructor at Full Stack Web Development bootcamps held in Turkey."
//         },
//         {
//             companyName: "ReCoded",
//             role: "Instructor",
//             time: "Since 2018",
//             description: "Instructor at Full Stack Web Development bootcamps held in Turkey."
//         }
//     ]
// }