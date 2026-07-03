"use client";
import React, { useState, useEffect } from 'react';
import Banner from './Banner/Banner';
import GetInTouchHome from './GetInTocuchHome/GetInTouchHome';
import SomeArticels from './SomeArticels/SomeArticels';
import SomeWork from './SomeWork/SomeWork';
import Skills from './Skills/Skills';
import './HomePage.css';

const backgrounds = [
    '/carousel/bg1.png',
    '/carousel/bg2.png',
    '/carousel/bg3.png'
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
                    key={bg}
                    className={`bg-layer ${index === bgIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.88), rgba(10, 25, 47, 0.95)), url('${bg}')` }}
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