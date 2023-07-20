import React from 'react';
import Timestamp from "@/components/timestamp/timestamp";
import A from "@/components/A/A";


const TopMenu = () => {
    return (
        <header>
            <nav className="navbar navi shadow-lg z-3">
                <div className="container-fluid justify-content-around">
                    <A className="navbar-brand" href="/">
                        <img src='images/logo.png' alt="" height="28"
                             className="d-inline-block align-text-top "/>
                        <span className='logo-text'>
                                    Inventory
                                </span>

                    </A>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search"
                               aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <Timestamp/>
                </div>
            </nav>
        </header>
    );
};

export default TopMenu;