import React, { useState } from "react";
import Pulau2 from "../src/assets/pulau merah 2.jpeg";
import djawatan from "../src/assets/dejawatan.jpg";

const Booking = () => {
  const items = [
    { image: Pulau2, name: "Pulau Merah", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { image: djawatan, name: "Djawatan", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { image: Pulau2, name: "Kawah Ijen", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { image: djawatan, name: "Sendang Seruni", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { image: Pulau2, name: "Bangsring", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { image: djawatan, name: "Telunjuk Raung", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  // Menampilkan slide berikutnya dan sebelumnya
  const visibleItems = [
    items[(currentIndex) % items.length],
    items[(currentIndex + 1) % items.length],
    items[(currentIndex + 2) % items.length],
    items[(currentIndex + 3) % items.length],
    items[(currentIndex + 4) % items.length],
  ];

  return (
    <div>
      <div className="home flex container">
        <div className="mainText">
          <h1>Cari liburan mu disini!</h1>
        </div>
      </div>

      <div className="slideContainer">
        <div className="slide">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="item"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="content">
                <div className="name">{item.name}</div>
                <div className="deskripsi">{item.description}</div>
                <button>See More</button>
              </div>
            </div>
          ))}
        </div>

        <div className="button">
          <button className="prev" onClick={goToPrev}>
            Prev
          </button>
          <button className="next" onClick={goToNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
