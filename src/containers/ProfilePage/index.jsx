import React from 'react'
import ProfileDescription from "../../components/Profile/ProfileDescription"
import Activities from "../../components/Profile/Activities"
import Experience from "../../components/Profile/Experience"
import Pinned from "../../components/Profile/Pinned"
import "./index.css"
import Col from 'react-bootstrap/Col'

const profileData = {
    
    description: {
        name : "Ammar Sammour",
        description : ["Lecturer", "Voluntarily teaching coding", "Part of the community since three years"]
    },

    pinned: ["Technology", "Education", "Software", "Web Design", "Greatness", "Friend"],

    activities: {
        activity1: ["Giving lecture for high school", "May 2018 - June 2021"],
        activity2: ["Giving lecture for high school", "May 2018 - June 2021"],
        activity3: ["Giving lecture for high school", "May 2018 - June 2021"]
    },

    professionalExperience: {
        experience1: {
            companyName: "ReCoded",
            role: "Instructor",
            time: "Since 2018",
            description: "Instructor at Full Stack Web Development bootcamps held in Turkey."
        },
        experience2: {
            companyName: "ReCoded",
            role: "Instructor",
            time: "Since 2018",
            description: "Instructor at Full Stack Web Development bootcamps held in Turkey."
        },
        experience3: {
            companyName: "ReCoded",
            role: "Instructor",
            time: "Since 2018",
            description: "Instructor at Full Stack Web Development bootcamps held in Turkey."
        }
    }
}

export default function index() {
    return (
        <div>
            <Col className="description" sm={4}>
                Description
                <ProfileDescription />
            </Col>
            <Col className="activities" sm={8}>
                Activities
                <Pinned />
                <Activities />
                <Experience />
            </Col>
        </div>
    )
}
