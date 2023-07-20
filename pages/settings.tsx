import React from 'react';
import MainContainer from "./MainContainer";
import Button from "react-bootstrap/Button";
import A from "@/components/A/A";

const Settings = () => {

    const handleLogout = ()=>{
        localStorage.removeItem("token");
    }

    return (
        <MainContainer>
            <div className='logout w-100 h-100 d-flex align-items-center justify-content-center  z-1'>
                <A href='/'>
                    <Button className='bg-success border-0' onClick={handleLogout}>
                        Logout
                    </Button>
                </A>
            </div>
        </MainContainer>
    );
};

export default Settings;