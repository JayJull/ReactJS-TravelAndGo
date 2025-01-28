import React from "react";

const Booking = () => {
    const tourPackages = [
        {
            id: 1,
            title: "Wisata Pantai",
            description: "Nikmati keindahan pantai dengan pasir putih dan air jernih.",
            price: 500000,
            image: "https://example.com/pantai.jpg"
        },
        {
            id: 2,
            title: "Wisata Gunung",
            description: "Jelajahi keindahan alam pegunungan dan udara segar.",
            price: 750000,
            image: "https://example.com/gunung.jpg"
        },
        {
            id: 3,
            title: "Wisata Kota",
            description: "Kunjungi tempat-tempat bersejarah dan budaya di kota.",
            price: 300000,
            image: "https://example.com/kota.jpg"
        }
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h1>Booking Wisata</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {tourPackages.map((packageItem) => (
                    <div key={packageItem.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px", width: "300px" }}>
                        <img src={packageItem.image} alt={packageItem.title} style={{ width: "100%", borderRadius: "8px" }} />
                        <h2>{packageItem.title}</h2>
                        <p>{packageItem.description}</p>
                        <p>Harga: Rp {packageItem.price.toLocaleString()}</p>
                        <button style={{ padding: "10px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                            Booking Sekarang
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Booking;