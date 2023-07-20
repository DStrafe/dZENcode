import React from 'react';
import A from "@/components/A/A";
import Gear from "@/components/svg/gear";
import Button from "react-bootstrap/Button";

const NavMenu = () => {
    const imageUrl = "https://play-lh.googleusercontent.com/UjaAdTYsArv7zAJbqGWjQw2ftuOtnAlvokffC3TQQ2K12mwk0YdXUF2wZBTBA2kDZIk";

    return (
        <div className="sidebar flex-column position-relative align-items-lg-start justify-content-around bg-white shadow-lg z-3">
            <div className="flex-column w-100 image mt-5">
                <img src={imageUrl} alt="" className="mt-4 rounded-circle img-fluid w-50" />
                <A href={'/settings'}>
                    <Button className='rounded-circle d-flex align-items-center justify-content-center p-2 bg-light border-0 z-5 gear shadow-sm'>
                        <Gear color='grey' />
                    </Button>
                </A>
            </div>
            <ul className="nav flex-column nav-underline link-underline-success align-items-center mt-xl-4">
                <li className="nav-item">
                    <A className="nav-link text-black text-decoration-none" href="/">
                        Приход
                    </A>
                </li>
                <li className="nav-item">
                    <A className="nav-link text-black text-decoration-none" href="/products">
                        Продукты
                    </A>
                </li>
                <li className="nav-item">
                    <A className="nav-link text-black text-decoration-none" href="/settings">
                        Настройки
                    </A>
                </li>
            </ul>
        </div>
    );
};

export default NavMenu;
