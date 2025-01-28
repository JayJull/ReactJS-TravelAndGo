import React from "react";
import pulau from "../../assets/Pulau merah.jpg"
import kawah from "../../assets/kawah.jpg"
import djawatan from "../../assets/Dejawatan.jpg"
import sendang from "../../assets/sendang.jpg"
import bangsring from "../../assets/bangsring.jpeg"
import telunjuk from "../../assets/telunjuk.jpg"
import davina from "../../assets/davina.jpg"
import chelsea from "../../assets/chelsea.jpg"
import messi from "../../assets/messi.jpg"
import donal from "../../assets/donal.jpg"

const mapTravelers = [
    {
        id: 1,
        destinationImage: pulau,
        travelerImage: davina,
        travelerName: 'Davina Karamoy',
        socialLinks: '@davina_karamoy'
    },
    {
        id: 2,
        destinationImage: djawatan,
        travelerImage: chelsea,
        travelerName: 'Chelsea Islan',
        socialLinks: '@chelsea_islan'
    },
    {
        id: 3,
        destinationImage: kawah,
        travelerImage: messi,
        travelerName: 'Lionel Messi',
        socialLinks: '@lm10_goat'
    },
    {
        id: 4,
        destinationImage: sendang,
        travelerImage: donal,
        travelerName: 'Donald Trump',
        socialLinks: '@itsTrump_01'
    },
    {
        id: 5,
        destinationImage: bangsring,
        travelerImage: donal,
        travelerName: 'Donald Trump',
        socialLinks: '@itsTrump_01'
    },
    {
        id: 6,
        destinationImage: telunjuk,
        travelerImage: donal,
        travelerName: 'Donald Trump',
        socialLinks: '@itsTrump_01'
    }

]

const Travelers = () => {    
    return (
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2>Top Travelers Of This Month!</h2>

                <div className="travelersContainer grid">
                    {
                        mapTravelers.map(({id, destinationImage, travelerImage, travelerName, socialLinks}) => {
                            return (
                            <div key={id} className="singleTraveler">
                                <img src={destinationImage} className="destinationImage" />
                                <div className="travelerDetails">
                                    <div className="travelerPicture">
                                        <img src={travelerImage} className="travelerImage" />
                                    </div>
                                    <div className="travelerName">
                                        <span>{travelerName}</span>
                                        <p>{socialLinks}</p>
                                    </div>
                                </div>
                            </div>
                                )
                            })                                                                     
                        }                    
                </div>
            </div>
        </div> 
    )
}

export default Travelers;