import React, {useEffect} from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountCircleLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";

import Aos from 'aos';
import 'aos/dist/aos.css'

const Search = () => {
    useEffect(() => {
            Aos.init({duration: 2000})
        }, [])

    return (
        <div className="search container section">
            <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer grid">
                <div className="btns flex">
                    <div className="singleBtn">
                        <span>Economy</span>
                    </div>
                    <div className="singleBtn">
                        <span>Business Class</span>
                    </div>                            
                    <div className="singleBtn">
                        <span>First Class</span>
                    </div>
                </div>

                <div data-aos='fade-up' data-aos-duration='2500' className="searchInputs flex">
                    <div className="singleInput flex">
                        <div className="iconDiv">
                        <HiOutlineLocationMarker className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Location</h4>
                            <input type="text" placeholder="Jalan Jalan Kemana Nih..." />
                        </div>
                    </div>

                    <div className="singleInput flex">
                        <div className="iconDiv">
                        <RiAccountCircleLine className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Location</h4>
                            <input type="text" placeholder="Masukkan Dulu Namanya..." />
                        </div>
                    </div>

                    <div className="singleInput flex">
                        <div className="iconDiv">
                        <SlCalender className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Location</h4>
                            <input type="text" placeholder="Jadi Kapan Nih Tanggalnya..." />
                        </div>
                    </div>

                    <div className="singleInput flex">
                        <div className="iconDiv">
                        <SlCalender className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Location</h4>
                            <input type="text" placeholder="Sampai Kapan Yaa..." />
                        </div>
                    </div>

                    <button className="btn btnBlock flex">Search Travel</button>
                </div>    
            </div>
            
        </div>
    )
}

export default Search;