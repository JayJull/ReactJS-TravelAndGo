import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import Subscribe from "../src/components/Subscribe/Subscribe";


const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />            
            <main className="main">{children}</main>
            <Subscribe />
            <Footer />
        </div>
        
    )
}

export default Layout;