import React from 'react'

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
            <img src={imageUrl} width="300" height = "300"
            />

        </div>
    )
}

export default Hobby1;