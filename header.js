import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './header.css'; // Import header styles
import Logo from './img/logo.png';
import { FaHome, FaUser, FaBriefcase, FaTools, FaComments } from 'react-icons/fa';

const Header = ({ announcement, onBookAppointment }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const mobileTabRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    handleResize(); // Call once to set initial state

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileTabRef.current && !mobileTabRef.current.contains(event.target)) {
        setActiveTab(null);
      }
    };

    if (isMobileView) {
      document.body.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.body.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileView]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName === activeTab ? null : tabName);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
        <span className="site-name">Ali Medical Centre</span>
      </div>
      {!isMobileView && (
        <nav className="main-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      )}
      {isMobileView && (
        <nav className="mobile-tab-bar" role="navigation" ref={mobileTabRef}>
          <ul>
            <li>
              <a href="#" className={`icon-link ${activeTab === 'Home' ? 'active' : ''}`} onClick={() => handleTabClick('Home')}>
                <FaHome />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#" className={`icon-link ${activeTab === 'About' ? 'active' : ''}`} onClick={() => handleTabClick('About')}>
                <FaUser />
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#" className={`icon-link ${activeTab === 'Projects' ? 'active' : ''}`} onClick={() => handleTabClick('Projects')}>
                <FaBriefcase />
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#" className={`icon-link ${activeTab === 'Tech' ? 'active' : ''}`} onClick={() => handleTabClick('Tech')}>
                <FaTools />
                <span>Tech</span>
              </a>
            </li>
            <li>
              <a href="#" className={`icon-link ${activeTab === 'Inbox' ? 'active' : ''}`} onClick={() => handleTabClick('Inbox')}>
                <FaComments />
                <span>Inbox?</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
      <div>
        <span className="announcement">{announcement}</span>
        <button onClick={onBookAppointment} className="header-btn">Book an Appointment</button>
      </div>
    </header>
  );
};

Header.propTypes = {
  announcement: PropTypes.string.isRequired,
  onBookAppointment: PropTypes.func.isRequired,
};

export default Header;