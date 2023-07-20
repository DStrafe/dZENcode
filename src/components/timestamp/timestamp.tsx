import React from 'react';
import ClockIcon from "@/components/svg/clockIcon";
import {useAppSelector} from "@/hooks/hooks";
import {Spinner} from "react-bootstrap";

const Timestamp = () => {

        const dateNow = useAppSelector(state => state.timestamp.current);

    if (!dateNow.loaded) {
        return <Spinner animation="border" role="status" className='text-green'>
            <span className="visually-hidden">Loading...</span>
        </Spinner>;
    }

    return (
        <div className="timestamp fw-semibold">
            <p className='day'>{dateNow.currentDayOfWeek}</p>
            <div className="datetime flex-row align-items-center justify-content-around fw-semibold">
                <span className='pe-4'>{dateNow.currentDate}</span>
                <ClockIcon/>
                <span>{dateNow.currentTime}</span>
            </div>
        </div>
    );
};

export default Timestamp;