import React from "react";

const About = () => {
    return (
        <div>
            <div className="home">
                <h2>About</h2>
            </div>

            <div className="about-container">                

                {/* Our Values Section */}
                <section className="our-values">
                    <h3>Our Values</h3>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="icon">✈️</div>
                            <h4>Adventure</h4>
                            <p>Exploring new destinations and creating unforgettable memories</p>
                        </div>
                        <div className="value-card">
                            <div className="icon">🌟</div>
                            <h4>Excellence</h4>
                            <p>Delivering high-quality service in every journey</p>
                        </div>
                        <div className="value-card">
                            <div className="icon">🤝</div>
                            <h4>Trust</h4>
                            <p>Building lasting relationships with our travelers</p>
                        </div>
                        <div className="value-card">
                            <div className="icon">💙</div>
                            <h4>Passion</h4>
                            <p>Passionate about making your travel dreams come true</p>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="our-services">
                    <h3>Our Services</h3>
                    <div className="services-grid">
                        <div className="service-item">
                            <h4>Tour Packages</h4>
                            <ul>
                                <li>Group Tours</li>
                                <li>Private Tours</li>
                                <li>Family Packages</li>
                                <li>Honeymoon Specials</li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <h4>Travel Services</h4>
                            <ul>
                                <li>Hotel Booking</li>
                                <li>Transportation</li>
                                <li>Travel Insurance</li>
                                <li>Custom Itineraries</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="why-choose-us">
                    <h3>Why Choose Us?</h3>
                    <div className="features-container">
                        <div className="feature">
                            <h4>Expert Guides</h4>
                            <p>Our professional guides ensure you get the most out of your travel experience</p>
                        </div>
                        <div className="feature">
                            <h4>Best Value</h4>
                            <p>Competitive prices without compromising on the quality of your journey</p>
                        </div>
                        <div className="feature">
                            <h4>24/7 Support</h4>
                            <p>Round-the-clock assistance for all your travel needs</p>
                        </div>
                        <div className="feature">
                            <h4>Customizable Tours</h4>
                            <p>Flexible itineraries tailored to your preferences and interests</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;