import React from 'react';
import './aboutus.css'; // Import your CSS file for styling
import aboutUsGIF from './img/hero/herooverlay.gif'; // Import overlay GIF

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <div className="about-us-image">
                    {/* Use the imported GIF image */}
                    <img src={aboutUsGIF} alt="About Us GIF" />
                </div>
                <div className="about-us-text">
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan mi nec libero sollicitudin, id rutrum nunc lobortis.
                        Mauris ac ultrices enim. Quisque scelerisque neque eget felis dignissim bibendum.
                    </p>
                    <button className="about-us-button">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;