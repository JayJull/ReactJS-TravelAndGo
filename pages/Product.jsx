import React, { useState } from "react";
import pulau from "../src/assets/pulau merah 2.jpeg";
import djawatan from "../src/assets/Dejawatan.jpg";
import sendang from "../src/assets/sendang.jpg";
import telunjuk from "../src/assets/telunjuk.jpg";
import bangsring from "../src/assets/bangsring.jpeg";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  
  const generateWhatsAppLink = (productTitle) => {
    const baseMessage = "Salam Travel! Saya ingin pesan paket ";
    const fullMessage = `${baseMessage}${productTitle}`;
    return `https://wa.me/6285156619369?text=${encodeURIComponent(fullMessage)}`;
  };

  const products = [
    {
      id: 1,
      image: pulau,
      description: "Banyuwangi, Indonesia",
      title: "Pantai Pulau Merah",
      category: "pantai",
      price: 15000
    },
    {
      id: 2,
      image: djawatan,
      description: "Banyuwangi, Indonesia",
      title: "Hutan De Djawatan",
      category: "hutan",
      price: 20000
    },
    {
      id: 3,
      image: sendang,
      description: "Lombok, Indonesia",
      title: "Sendang Seruni",
      category: "air-terjun",
      price: 10000
    },
    {
      id: 4,
      image: telunjuk,
      description: "Banyuwangi, Indonesia",
      title: "Gunung Telunjuk",
      category: "gunung",
      price: 25000
    },
    {
      id: 5,
      image: bangsring,
      description: "Banyuwangi, Indonesia",
      title: "Bangsring Underwater",
      category: "pantai",
      price: 30000
    },
    {
      id: 5,
      image: bangsring,
      description: "Banyuwangi, Indonesia",
      title: "Bangsring Underwater",
      category: "pantai",
      price: 30000
    },
    {
      id: 5,
      image: bangsring,
      description: "Banyuwangi, Indonesia",
      title: "Bangsring Underwater",
      category: "pantai",
      price: 30000
    },
    {
      id: 5,
      image: bangsring,
      description: "Banyuwangi, Indonesia",
      title: "Bangsring Underwater",
      category: "pantai",
      price: 30000
    },
    {
      id: 5,
      image: bangsring,
      description: "Banyuwangi, Indonesia",
      title: "Bangsring Underwater",
      category: "pantai",
      price: 30000
    },
    {
      id: 5,
      image: bangsring,
      description: "Banyuwangi, Indonesia",
      title: "Bangsring Underwater",
      category: "pantai",
      price: 30000
    },
    {
      id: 5,
      image: bangsring,
      description: "Banyuwangi, Indonesia",
      title: "Bangsring Underwater",
      category: "pantai",
      price: 30000
    },
    {
      id: 5,
      image: bangsring,
      description: "Banyuwangi, Indonesia",
      title: "Bangsring Underwater",
      category: "pantai",
      price: 30000
    },
  ];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const getFilteredAndSortedProducts = () => {
    let filteredProducts = [...products];
    
    if (selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (sortBy === "murah-mahal") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "mahal-murah") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    return filteredProducts;
  };

  return (
    <div>
      <div className="home">
        <h2>Jalan Jalan Kemana?</h2>
      </div>

      <div className="filter-container">
        <div className="filter-group">
          <label>Kategori:</label>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="all">Semua Kategori</option>
            <option value="pantai">Pantai</option>
            <option value="gunung">Gunung</option>
            <option value="hutan">Hutan</option>
            <option value="air-terjun">Air Terjun</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Urutkan Harga:</label>
          <select value={sortBy} onChange={handleSortChange}>
            <option value="default">Default</option>
            <option value="murah-mahal">Murah ke Mahal</option>
            <option value="mahal-murah">Mahal ke Murah</option>
          </select>
        </div>
      </div>

      <div className="produkContainer">
        <div className="cardContainer">
          {getFilteredAndSortedProducts().map((product) => (
            <article key={product.id} className="cardArticle">
              <img src={product.image} alt={product.title} className="cardImg" />
              <div className="cardData">
                <span className="cardDeskripsi">{product.description}</span>
                <h2 className="cardTitle">{product.title}</h2>
                <p className="cardPrice">Rp {product.price.toLocaleString()}</p>
                <a href={generateWhatsAppLink(product.title)} className="cardButton">
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;