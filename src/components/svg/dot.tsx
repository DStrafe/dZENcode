import React from 'react';

const Dot = ({color}:any) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="4" fill={color} />
            </svg>

        </>
    );
};

export default Dot;