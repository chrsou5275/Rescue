import React from 'react';

const Home = (props) => (
    <div className="main-content">
        <div className="container">
            <h2>{props.title}</h2>
            <p>Our goal here for Dogs for All Rescue is to help puppies and older dogs find their forever home.
            We want to help dog lovers find their perfect match here at our rescue facility.</p>
            <div className="home-image"></div>
            <div className="thumbnail-container">
                <div className="home-thumbnail-1"></div>
                <div className="home-thumbnail-2"></div>
                <div className="home-thumbnail-3"></div>
            </div>
        </div>
    </div>
);

export default Home;