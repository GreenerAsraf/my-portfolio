import React from 'react';
import ArticelCard from '../ShearedFolder/ArticelCard/ArticelCard';
import articelList from '../ShearedFolder/ArticelData/ArticelData'

const ArticelPage = () => {
    return (
        <section className="container pt-2">
            <h2 className="section__title light__white__color">My blogs</h2>
            <ArticelCard articelList={articelList}/>
        </section>
    );
};

export default ArticelPage;