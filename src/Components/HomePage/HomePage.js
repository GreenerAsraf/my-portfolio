import React from 'react';
import Banner from './Banner/Banner';
import GetInTouchHome from './GetInTocuchHome/GetInTouchHome';
import SomeArticels from './SomeArticels/SomeArticels';
import SomeWork from './SomeWork/SomeWork';
import Skills from './Skills/Skills';

const HomePage = () => {
    return (
        <div style={{
            backgroundImage: "linear-gradient(rgba(30, 35, 39, 0.85), rgba(30, 35, 39, 0.95)), url('/developer_background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh"
        }}>
            <Banner />
            <Skills />
            <SomeWork />
            <SomeArticels />
            <GetInTouchHome />
        </div>
    );
};

export default HomePage;