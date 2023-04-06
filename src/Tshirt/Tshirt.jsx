import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt}) => {
    const {name, picture, price}= tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: {price}</p>
        </div>
    );
};

export default Tshirt;