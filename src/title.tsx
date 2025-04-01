import React from 'react';

interface TitleProps {
    className: string;
    teamNum: number;
    hobbies: string;
}

const Title: React.FC<TitleProps> = ({ className, teamNum, hobbies }) => {
    return (
        <div>
            <h1>{className} Team {teamNum}: {hobbies}</h1>
        </div>
    );
};

export default Title;
