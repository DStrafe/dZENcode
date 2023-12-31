import React from 'react';

const Arrow = ({color}:any) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                width="24"
                height="24"
            >
                <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>

        </>
    );
};

export default Arrow;