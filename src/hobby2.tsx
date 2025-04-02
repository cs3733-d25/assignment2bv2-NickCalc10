import React from "react"
import List2 from './list2';

interface hobbyProps {
    hobbyName: string
    description: string
    imageUrl: string
}

const hobby2: React.FC<hobbyProps> = ({hobbyName, description, imageUrl}) => {
    return (
        <div>
            <h1>{hobbyName}</h1>
            <p>{description}</p>
            <img src={imageUrl} width="300" height = "300"/>
            <List2 title={'There are many variables that go into fishing such as:\n'}
                values={["Lure", "Weather", "Temperature", "Time of Year", "Location", "Water Clarity", "Time of Day", "Rod + Reel"]}>
            </List2>
        </div>
    )
}

export default hobby2;