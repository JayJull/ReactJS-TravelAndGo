import React, { useState, useEffect } from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [active, setActive] = useState('navBarMenu');
    const [noBg, addBg] = useState('navBarTwo');
    
    const toggleNavbar = () => {
        setActive((prevActive) => prevActive === 'navBarMenu' ? 'navBarMenu showNavbar' : 'navBarMenu');
    };
    
    const addBgColor = () => {
        if (window.scrollY >= 10) {
            addBg('navBarTwo navbar_With_Bg');
        } else {
            addBg('navBarTwo');
        }
    };
    
    useEffect(() => {
        addBgColor();

        window.addEventListener('scroll', addBgColor);        
        return () => {
            window.removeEventListener('scroll', addBgColor);
        };
    }, []);

    return (
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                    <SiConsul />
                </div>
                <div className="none flex">
                    <li className="flex"> <BsPhoneVibrate className='icon'/> Support</li>
                    <li className="flex"> <AiOutlineGlobal className='icon'/> Languages</li>
                </div>
                <div className="atb flex">
                    <span>Sign In</span>
                    <span>Sign Out</span>
                </div>
            </div>

            <div className={noBg}>
                <div className="logoDiv">
                    <img src={logo} className="Logo" />
                </div>
                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={toggleNavbar} className="listItem">Home</li>
                        <li onClick={toggleNavbar} className="listItem">About</li>
                        <li onClick={toggleNavbar} className="listItem">Offers</li>
                        <li onClick={toggleNavbar} className="listItem">Seats</li>
                        <li onClick={toggleNavbar} className="listItem">Destinations</li>
                    </ul>
                    <button onClick={toggleNavbar} className="btn flex btnOne">Contact</button>
                </div>
                <button className="btn flex btnTwo">Get Started</button>

                {/* titik tiga */}
                <div onClick={toggleNavbar} className="toggleIcon">
                    <CgMenuGridO className="icon" />
                </div>
            </div>
        </div> 
    );
}

export default Navbar;
