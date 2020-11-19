import React from 'react'
import ProfileDescription from "../../components/Profile/ProfileDescription"
import Activities from "../../components/Profile/Activities"
import Experience from "../../components/Profile/Experience"
import Pinned from "../../components/Profile/Pinned"
import "./index.css"
import {Col, Row} from 'react-bootstrap'

const profileData = {
    
    description: {
        imageUrl: "https://res.cloudinary.com/dk2ghb1pg/image/upload/v1535301733/bxoyfrkj4zwtbsewcryf.png",
        name : "Ammar Sammour",
        description : ["Lecturer", "Voluntarily teaching coding", "Part of the community since three years"]
    },

    pinned: ["Technology", "Education", "Software", "Web Design", "Greatness", "Friend"],

    activities: [
        ["Giving lecture for high school", "May 2018 - June 2021"],
        ["Giving lecture for high school", "May 2018 - June 2021"],
        ["Giving lecture for high school", "May 2018 - June 2021"]
    ],

    professionalExperience: [
        {
            companyName: "ReCoded",
            role: "Instructor",
            time: "Since 2018",
            description: "Instructor at Full Stack Web Development bootcamps held in Turkey."
        },
        {
            companyName: "ReCoded",
            role: "Instructor",
            time: "Since 2018",
            description: "Instructor at Full Stack Web Development bootcamps held in Turkey."
        },
        {
            companyName: "ReCoded",
            role: "Instructor",
            time: "Since 2018",
            description: "Instructor at Full Stack Web Development bootcamps held in Turkey."
        }
    ]
}

export default function index() {
    return (
        <div>
            <Row>
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
            </Row>
        </div>
    )
}
