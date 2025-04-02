import React from 'react'
import List1 from './list1';
import Table1 from './table1';
import Form1 from "./form1.tsx";

interface hobbyProps {
    hobbyName: string
    description: string
    imageUrl: string
}

const hobby1: React.FC<hobbyProps> = ({ hobbyName, description, imageUrl }) => {
    return (
        <div>
            <h1>{hobbyName}</h1>
            <p>{description}</p>
            <img src={imageUrl} width="300" height = "300"/>
            <List1 title={'Beginner Workout Splits/Styles Ranked From Easiest for Beginners to Hardest'}
                   items={["Full Body", "Push Pull Legs", "Upper Lower Split", "Body Part Split", "CrossFit"]}>
            </List1>
            <Table1></Table1>
            <Form1></Form1>

        </div>
    )
}



export default hobby1;