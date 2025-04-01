import React from 'react'
import List1 from "./List1.tsx";

interface hobbyProps {
    hobbyName: string
    description: string
    imageUrl: string
}

const Hobby1: React.FC<hobbyProps> = ({ hobbyName, description, imageUrl }) => {
    return (
        <div>
            <h1>{hobbyName}</h1>
            <p>{description}</p>
            <img src={imageUrl} width="300" height = "300"/>
            <List1
                title={"Beginner Workout Splits/Styles Ranked From Easiest for Beginners to Hardest"}
                items={["Full Body", "Push Pull Legs", "Upper Lower Split", "Body Part Split", "CrossFit"]}>
            </List1>


        </div>
    )
}



export default Hobby1;