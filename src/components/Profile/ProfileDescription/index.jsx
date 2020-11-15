import React from 'react'

export default function index({imageUrl, name}) {
    return (
        <div>
            <img src={imageUrl} className="profilePic"/>
            <h3>{name}</h3>
            <p>{description}</p>
            <button className="editProfileBtn">Edit Profile</button>
        </div>
    )
}
