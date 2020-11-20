import React from 'react'
import Experience from "../Experience"

export default function Experiences({data}) {
    console.log(data)
    return (
        <div>
            <h2>Experiences:</h2>
            {data.map(experience => <Experience experienceData={experience}/>)}
        </div>
    )
}
