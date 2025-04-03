import React from "react"
import List2 from './components/list2.tsx';
import Table2 from "./components/table2.tsx";
import Form2 from "./components/form2.tsx";


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
            <Table2>
            </Table2>
            <Form2>

            </Form2>

        </div>
    )
}

export default hobby2;