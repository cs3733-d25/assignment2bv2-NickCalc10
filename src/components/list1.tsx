import React from 'react';

interface listProps {
    title: string;
    items: string[];
}

const list: React.FC<listProps> = ({title, items}) => {
    return (
        <div>
            <h2>{title}</h2>
            <ol className = "list-format">
                {items.map((item, index) => (
                    <li key={index}> {item}</li>
                ))}
            </ol>
        </div>
    )
}
export default list;