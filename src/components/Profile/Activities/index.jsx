import React from 'react'

export default function index(props) {
    //console.log(props.activities)
    return (
        <div>
            <h2 className="headings">Activites</h2>
            <div className="activities">
                {props.activities.map(activity =>
                    <div className="activity">{activity}</div>)}
            </div>
        </div>
    )
}
