import React, {useEffect} from "react";
import video from "../../assets/video.mp4";
import car from "../../assets/car.png";

import Aos from 'aos';
import 'aos/dist/aos.css'


const Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <div className="home flex container">
            <div className="mainText">
                <h1 data-aos='fade-up' data-aos-duration='2500'>Jelajahi Keindahan Alam Banyuwangi</h1>
            </div>
            

            <div className="homeImage flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop className="video"></video>
                </div>
                <img src={car} alt="" className="car" />                
            </div>
        </div>
    )
}

export default Home