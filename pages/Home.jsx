import React, { useState, useEffect } from "react";
import video from "../src/assets/video.mp4";
import car from "../src/assets/car.png";
import foto from "../src/assets/foto.jpeg";
import car2 from "../src/assets/car2.png";
import pulau from "../src/assets/Pulau merah.jpg";
import kawah from "../src/assets/kawah.jpg";
import djawatan from "../src/assets/Dejawatan.jpg";
import sendang from "../src/assets/sendang.jpg";
import bangsring from "../src/assets/bangsring.jpeg";
import telunjuk from "../src/assets/telunjuk.jpg";
import davina from "../src/assets/davina.jpg";
import chelsea from "../src/assets/chelsea.jpg";
import messi from "../src/assets/messi.jpg";
import donal from "../src/assets/donal.jpg";
import pulau2 from "../src/assets/pulau merah 2.jpeg"
import dejawatan from "../src/assets/dejawatan.jpg";

import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Aos from "aos";
import "aos/dist/aos.css";

const mapTravelers = [
  {
    id: 1,
    destinationImage: pulau,
    travelerImage: davina,
    travelerName: "Davina Karamoy",
    socialLinks: "@davina_karamoy",
  },
  {
    id: 2,
    destinationImage: djawatan,
    travelerImage: chelsea,
    travelerName: "Chelsea Islan",
    socialLinks: "@chelsea_islan",
  },
  {
    id: 3,
    destinationImage: kawah,
    travelerImage: messi,
    travelerName: "Lionel Messi",
    socialLinks: "@lm10_goat",
  },
  {
    id: 4,
    destinationImage: sendang,
    travelerImage: donal,
    travelerName: "Donald Trump",
    socialLinks: "@itsTrump_01",
  },
  {
    id: 5,
    destinationImage: bangsring,
    travelerImage: donal,
    travelerName: "Donald Trump",
    socialLinks: "@itsTrump_01",
  },
  {
    id: 6,
    destinationImage: telunjuk,
    travelerImage: donal,
    travelerName: "Donald Trump",
    socialLinks: "@itsTrump_01",
  },
];

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [items, setItems] = useState([  
    {
      image: dejawatan,
      name: "Djawatan",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
    {
      image: pulau2,
      name: "Pulau Merah",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },    
    {
      image: kawah,
      name: "Kawah Ijen",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
    {
      image: kawah,
      name: "Kawah Ijen",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
    {
      image: kawah,
      name: "Kawah Ijen",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },    
    
  ]);

  const handleNext = () => {
    setItems((prevItems) => {
      const [first, ...rest] = prevItems;
      return [...rest, first];
    });
  };

  const handlePrev = () => {
    setItems((prevItems) => {
      const rest = prevItems.slice(0, -1);
      const last = prevItems[prevItems.length - 1];
      return [last, ...rest];
    });
  };

  return (
    <div>
      <div className="home flex container">
        <div className="mainText">
          <h1 data-aos="fade-up" data-aos-duration="2500">
            Jelajahi Keindahan Alam Banyuwangi
          </h1>
        </div>

        <div className="homeImage flex">
          <div className="videoDiv">
            <video src={video} autoPlay muted loop className="video"></video>
          </div>
          <img src={car} alt="" className="car" />
        </div>
      </div>
      <div className="support container section">
        <div className="sectionContainer">
          <div className="tittlesDiv">
            <small>travel support</small>
            <h2>Plan your travel with confidence</h2>
            <p>
              Find help with booking and travel plans, see what to expect along
              the journey!
            </p>
          </div>

          <div className="infoDiv grid">
            <div className="textDiv grid">
              <div
                data-aos="fade-down"
                data-aos-duration="3500"
                className="singleInfo"
              >
                <span className="number">01</span>
                <h4>Travel requirements for Dubai</h4>
                <p>
                  Find help with booking and travel plans, see what to expect
                  alongthe journey to your favourite destinations!
                </p>
              </div>

              <div
                data-aos="fade-down"
                data-aos-duration="3500"
                className="singleInfo"
              >
                <span className="number">02</span>
                <h4>Chauffeur service at your arrival</h4>
                <p>
                  Find help with booking and travel plans, see what to expect
                  alongthe journey to your favourite destinations!
                </p>
              </div>

              <div
                data-aos="fade-down"
                data-aos-duration="3500"
                className="singleInfo"
              >
                <span className="number">03</span>
                <h4>Multi-risk travel insurance</h4>
                <p>
                  Find help with booking and travel plans, see what to expect
                  alongthe journey to your favourite destinations!
                </p>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="2500"
              className="imgDiv"
            >
              <img src={car2} alt="" />
            </div>
          </div>
        </div>
      </div>     
      <div className="destinasiFavorite section">
        <h1>Destination Favorite</h1>
        <p>
        The following are favorite destinations that are visited by many!
        </p>
      </div>
       <div className="slideContainer section">
        <div className="slide">
          {items.map((item, index) => (
            <div
              key={index}
              className="item"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="content">
                <div className="name">{item.name}</div>
                <div className="des">{item.description}</div>
                <button>See More</button>
              </div>
            </div>
          ))}
        </div>

        <div className="button">
          <button className="prev" onClick={handlePrev}>
            <ArrowLeft size={20} />
          </button>
          <button className="next" onClick={handleNext}>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className="info section">
        <div className="infoContainer container">
          <div className="titleDiv flex">
            <h2>Travel to make memories all around the world</h2>
            <button className="btn">View All</button>
          </div>

          <div className="cardDiv grid">
            <div
              data-aos="fade-right"
              data-aos-duration="4000"
              className="singleCard grid"
            >
              <div className="iconDiv flex">
                <RxCalendar className="icon" />
              </div>
              <span className="cardTitle">Book & Relax</span>
              <p>
                You can also call travel admin from your phone and book a
                ticket!
              </p>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-duration="4000"
              className="singleCard grid"
            >
              <div className="iconDiv flex">
                <BsShieldCheck className="icon" />
              </div>
              <span className="cardTitle">Smart Checklist</span>
              <p>
                You can also call travel admin from your phone and book a
                ticket!
              </p>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="4000"
              className="singleCard grid"
            >
              <div className="iconDiv flex">
                <BsBookmarkCheck className="icon" />
              </div>
              <span className="cardTitle">Save More</span>
              <p>
                You can also call travel admin from your phone and book a
                ticket!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lounge container section">
        <div className="sectionContainer grid">
          <div className="imgDiv">
            <img src={foto} alt="" />
          </div>

          <div className="textDiv">
            <h2>Uncompanied Minor Lounge</h2>
            <div className="grids grid">
              <div className="singleGrid">
                <span className="gridTitle">Help through the phone</span>
                <p>
                  You can also call travel from yout phone and book a ticket to
                  one of your favorite destinations
                </p>
              </div>

              <div className="singleGrid">
                <span className="gridTitle">Safety priority</span>
                <p>
                  You can also call travel from yout phone and book a ticket to
                  one of your favorite destinations
                </p>
              </div>

              <div className="singleGrid">
                <span className="gridTitle">Care on the road</span>
                <p>
                  You can also call travel from yout phone and book a ticket to
                  one of your favorite destinations
                </p>
              </div>

              <div className="singleGrid">
                <span className="gridTitle">Chauffeur-drive service</span>
                <p>
                  You can also call travel from yout phone and book a ticket to
                  one of your favorite destinations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="travelers container section">
        <div className="sectionContainer">
          <h2>Top Travelers Of This Month!</h2>

          <div className="travelersContainer grid">
            {mapTravelers.map(
              ({
                id,
                destinationImage,
                travelerImage,
                travelerName,
                socialLinks,
              }) => {
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
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
