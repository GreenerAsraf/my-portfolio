"use client";
import React, { useState, useEffect } from 'react';
import Banner from './Banner/Banner';
import GetInTouchHome from './GetInTocuchHome/GetInTouchHome';
import SomeArticels from './SomeArticels/SomeArticels';
import SomeWork from './SomeWork/SomeWork';
import Skills from './Skills/Skills';
import './HomePage.css';

const backgrounds = [
    { url: '/carousel/bg1.png', position: 'center center' },
    { url: '/carousel/bg2.png', position: 'center center' },
    { url: '/carousel/bg3.png', position: 'center center' },
    { url: '/carousel/bg4.JPG', position: 'center top' },
    { url: '/profile-pic.JPG', position: 'center top' }
];

const HomePage = () => {
    const [bgIndex, setBgIndex] = useState(0);

    useEffect(() => {
        // Change background image every 6 seconds
        const interval = setInterval(() => {
            setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 6000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="homepage-wrapper">
            {backgrounds.map((bg, index) => (
                <div
                    key={bg.url}
                    className={`bg-layer ${index === bgIndex ? 'active' : ''}`}
                    style={{ 
                        backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.88), rgba(10, 25, 47, 0.95)), url('${bg.url}')`,
                        backgroundPosition: bg.position
                    }}
                ></div>
            ))}
            
            <div className="homepage-content">
                <Banner />
                <Skills />
                <SomeWork />
                <SomeArticels />
                <GetInTouchHome />
            </div>
        </div>
    );
};

export default HomePage;