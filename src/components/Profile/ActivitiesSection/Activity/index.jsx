import React from 'react'

export default function Activity({activityData}) {
    console.log(activityData)
    return (
        <div>
            <h5>{activityData.name}</h5>
            <h6>{activityData.date}</h6>
            <p>{activityData.description}</p>
        </div>
    )
}
