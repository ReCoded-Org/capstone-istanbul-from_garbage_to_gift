import React from 'react'
import "./index.css"

export default function index(props) {
    //console.log(props.description.description)
    return (
        <div className="descriptionCont">
            <div className="profilePic">
                <img src={props.imageUrl} alt="profile" className="profilePic"/>
            </div>
            <br />
            <div className="profileName">
                <h3>{props.description.name}</h3>
            </div>
            <br />
            <div className="profileDescription">
                <h3>{props.description.description}</h3>
            </div>
            <br />
            <div className="profileEditBtn">
                <button className="editProfileBtn">Edit Profile</button>
            </div>
        </div>
    )
}
