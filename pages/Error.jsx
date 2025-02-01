import React from "react";
import { Link } from "react-router-dom";
import messi from "../src/assets/messi.jpg";

const Error = () => {
    return (
        <div className="home">
        <img 
          src={messi} 
          alt="Error 404" 
          style={{ width: '300px', marginBottom: '30px' }}
        />
        <h1>Oops! Halaman Tidak Ditemukan</h1>
        <p>Sepertinya Anda tersesat di alam mimpi...</p>
        <Link to="/" className="home-link">
          🏠 Kembali ke Realitas
        </Link>
      </div>
    )
}

export default Error