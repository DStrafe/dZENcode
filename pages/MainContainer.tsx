import React, {useEffect, useState} from 'react';
import Head from "next/head";
import TopMenu from "@/components/header/TopMenu";
import NavMenu from "@/components/sidebar/NavMenu";
import fetchTime from "@/components/fetchTime";
import Button from "react-bootstrap/Button";
import PageTransition from "@/components/PageTransition";

const MainContainer = ({children}: any) => {
    fetchTime();

    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsAuth(true);
        }
    }, [isAuth]);
    const handleLogin =()=>{
        localStorage.setItem("token", 'token');
        setIsAuth(true);
    }


    if (!isAuth) {
        return (
            <div className='flex-column w-100 image mt-5'>
                <Button className='bg-success border-0' onClick={handleLogin}>
                    Login
                </Button>
            </div>
        )
    }

    return (
        <>
            <div className="wrapper z-3">
                <div className="content z-3">
                    <Head>
                        <title>dZENcode</title>
                        <meta charSet="UTF-8"/>
                        <meta name="viewport" content="width=device-width"/>
                        <link rel="icon" type="image/x-icon" href="/images/ico/favicon.ico"/>
                    </Head>
                    <TopMenu/>
                    <NavMenu/>
                    <div className="">
                        <PageTransition>
                            {children}
                        </PageTransition>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainContainer;