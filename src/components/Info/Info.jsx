import React, {useEffect} from "react";
import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";

import Aos from 'aos';
import 'aos/dist/aos.css'

const Info = () => {
    useEffect(() => {
                Aos.init({duration: 2000})
            }, [])
            
    return (
        <div className="info section">
            <div className="infoContainer container">
                <div className="titleDiv flex">
                    <h2>Travel to make memories all around the world</h2>
                    <button className="btn">View All</button>
                </div>

                <div className="cardDiv grid">
                    <div className="singleCard grid">
                        <div className="iconDiv flex">
                            <RxCalendar className="icon"/>
                        </div>
                        <span className="cardTitle">Book & Relax</span>
                        <p>You can also call travel admin from your phone and book a ticket!</p>
                    </div>

                    <div className="singleCard grid">
                        <div className="iconDiv flex">
                            <BsShieldCheck className="icon"/>
                        </div>
                        <span className="cardTitle">Smart Checklist</span>
                        <p>You can also call travel admin from your phone and book a ticket!</p>
                    </div>

                    <div className="singleCard grid">
                        <div className="iconDiv flex">
                            <BsBookmarkCheck className="icon"/>
                        </div>
                        <span className="cardTitle">Save More</span>
                        <p>You can also call travel admin from your phone and book a ticket!</p>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default Info;