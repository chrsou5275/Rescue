import React from 'react';
import { DogsList } from "../data/dogs";
import { Link } from 'react-router-dom';
const Dogs = (props) => {

    let dogs = DogsList.map((animal) => {
        return (
            <div className="dog-container">
                <a>
                    <div className="dog-image" style={{ backgroundImage: "url(" + animal.img_src + ")" }}></div>
                </a>
                <h3>{animal.name}</h3>
            </div>

        );


    });

    return (
    <div className="main-content">
        <div><Link className="back" to="/">Return</Link></div>
        <h2>{props.title}</h2>
        <div className="container">
            {dogs}

        </div>
    </div>
    );
};

export default Dogs;