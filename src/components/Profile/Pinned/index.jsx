import React from 'react'

export default function index(skills) {
    return (
        <div>
            <h2 className="headings">Pinned</h2>
            <div className="skillsSection">
            {skills.map(skill =>
                <button className="skillBtn">{skill}</button>)}
            </div>
        </div>
    )
}
