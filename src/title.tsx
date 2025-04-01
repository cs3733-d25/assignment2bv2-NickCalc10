import React from 'react';

interface TitleProps {
    cName: string;
    teamNum: number;
    hobbies: string;
}

const Title: React.FC<TitleProps> = ({ cName, teamNum, hobbies }) => {
    return (
        <div>
            <h1>{cName} Team {teamNum}: {hobbies}</h1>
        </div>
    );
};

export default Title;
