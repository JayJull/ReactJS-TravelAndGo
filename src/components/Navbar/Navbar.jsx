import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
            <div className={noBg}>
                <div className="logoDiv">
                    <img src={logo} className="Logo" />
                </div>
                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={toggleNavbar} className="listItem"><Link to="/" className="navLink">Home</Link></li>
                        <li onClick={toggleNavbar} className="listItem"><Link to="/booking" className="navLink">Booking</Link></li>
                        <li onClick={toggleNavbar} className="listItem"><Link to="#" className="navLink">Galeri Destinasi</Link></li>                        
                        <li onClick={toggleNavbar} className="listItem"><Link to="#" className="navLink">About</Link></li>
                    </ul>
                    <button onClick={toggleNavbar} className="btn flex btnOne">Contact</button>
                </div>
                <button className="btn flex btnTwo">Contact</button>
                
                <div onClick={toggleNavbar} className="toggleIcon">
                    <CgMenuGridO className="icon" />
                </div>
            </div>
        </div> 
    );
}

export default Navbar;
