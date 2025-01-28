import React from "react";
import logo from "../../assets/logo.png";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="sectionContainer container grid">
                <div className="gridOne">
                    <div className="logoDiv">
                        <img src={logo} className="Logo" />
                    </div>
                    <p>Kapan lagi travel an bareng kami, ayo booking sekarang!</p>
                    <div className="socialIcon flex">
                        <TiSocialFacebook className="icon"/>
                        <TiSocialInstagram className="icon"/>                        
                        <FaWhatsapp className="icon"/>                        
                    </div>
                </div>
                <div className="footerLinks">
                    <span className="linkTitle">Quick Guide</span>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Offers</a>
                    </li>
                    <li>
                        <a href="#">Seats</a>
                    </li>                    
                    <li>
                        <a href="#">Destinations</a>
                    </li>                    
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <a href="#">How To</a>
                    </li>
                    <li>
                        <a href="#">Timetable</a>
                    </li>
                    <li>
                        <a href="#">Our Communities</a>
                    </li>                    
                    <li>
                        <a href="#">Explore</a>
                    </li>  
                </div>
            </div>

            <div className="copyRightDiv flex">
                <p>Copyright @2025 <a href="https://emailto-BigKreatif@gmail.com" target="_blank">BigKreatif</a></p>
            </div>
        </div>
    )
}

export default Footer