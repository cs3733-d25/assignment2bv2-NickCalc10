import React from 'react';

interface introProps{
    name1: string
    name2: string
}

const Intro: React.FC<introProps> = ({name1, name2}) => {
    return(
        <div>
            <p> Hello we are {name1} and {name2} and we are excited to share our hobbies with you
            </p>
        </div>
    )
}

export default Intro;