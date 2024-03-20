import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './landingpage.css';
import backgroundVideo from './img/hero/hero-video.mp4';

const LandingPage = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typedElement = typedRef.current;

        if (typedElement) {
            const typedStrings = typedElement.getAttribute('data-typed-items').split(',');

            if (typedRef.current && typedRef.current._typed) {
                typedRef.current._typed.destroy();
            }

            typedRef.current._typed = new Typed(typedElement, {
                strings: typedStrings,
                typeSpeed: 50,
                backSpeed: 50,
                loop: true,
                showCursor: false
            });
        }

        return () => {
            if (typedRef.current && typedRef.current._typed) {
                typedRef.current._typed.destroy();
            }
        };
    }, []); // Run effect only once on component mount

    return (
        <div className="landing-page">
            <video autoPlay loop muted className="background-video">
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>Welcome to Ali Medical Centre</h1>
                <p className="hero-subtitle">
                    <span className="green-arrow-icon">➜</span>{' '}
                    <span
                        ref={typedRef}
                        className="typed"
                        data-typed-items="Dedicated to your health.,Providing compassionate care.,Your wellness is our priority."
                    ></span>
                </p>
                <button className="primary-button">Book A Consultant Now</button>
            </div>
           
        </div>
    );
};

export default LandingPage;