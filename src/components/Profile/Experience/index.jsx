import React from 'react'

export default function index(experiences) {
    return (
        <div>
            <h2 className="headings">Professional Experience</h2>
            <div className="activities">
                {experiences.map(experience =>
                    <div className="activity">{experience}</div>)}
            </div>
        </div>
    )
}
