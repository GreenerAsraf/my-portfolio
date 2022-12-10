import React from 'react';
import Banner from './Banner/Banner';
import GetInTouchHome from './GetInTocuchHome/GetInTouchHome';
import SomeArticels from './SomeArticels/SomeArticels';
import SomeWork from './SomeWork/SomeWork';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <SomeWork />
            <SomeArticels />
            <GetInTouchHome />
        </div>
    );
};

export default HomePage;