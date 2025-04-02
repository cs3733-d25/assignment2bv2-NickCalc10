import React from "react"

interface listProps {
    title: string
    values: string[]
}

const list: React.FC<listProps> = ({ title, values }) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {values.map((value, index) => (
                    <li key={index}> {value}</li>
                ))}
            </ul>
        </div>
    )
}

export default list;
