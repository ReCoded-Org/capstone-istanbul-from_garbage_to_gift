import React from 'react'

export default function index(activities) {
    return (
        <div>
            <h2 className="headings">Activites</h2>
            <div className="activities">
                {activities.map(activiy =>
                    <div className="activity">{activity}</div>)}
            </div>
        </div>
    )
}
