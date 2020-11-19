import React from 'react'

export default function index(props) {
    //console.log(props.experience)
    return (
        <div>
            <h2 className="headings">Professional Experience</h2>
            <div className="activities">
                {props.experience.map(experience =>
                <>
                    <div className="activity">{experience.companyName}</div>
                    <div className="activity">{experience.role}</div>
                    <div className="activity">{experience.time}</div>
                    <div className="activity">{experience.description}</div>
                </>
                )}
            </div>
        </div>
    )
}
