import data from ".././data.json";
import { useState } from 'react';
import "./styling.css"


export default function MyProjects () {
    const [index, setIndex] = useState(0);
    
    function handleClick() {
        if (index < data.projects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }
    let poses = data.projects
    let pose = poses[index]

    return(
        <div>
            <button onClick={handleClick}>Next</button>
            <img src = {pose.imageURL} className = "image"></img>
            <h3>{pose.poseNameSanskrit}, </h3>
            <h3>{pose.poseNameEnglish}</h3>
            <h3>{pose.difficultyLevel}</h3>
            
        </div>
    )
}