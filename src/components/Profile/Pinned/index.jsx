import React from 'react'
import "./index.css"

export default function index(props) {
    //console.log(props.pinned)
    return (
        <div>
            <h2 className="headings">Pinned</h2>
            {props.pinned.map(skill =>
                <span className="skillsBox">{skill}</span>)}
        </div>
    )
}
