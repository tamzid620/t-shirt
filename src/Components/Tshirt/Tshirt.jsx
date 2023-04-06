import React from 'react';

const Tshirt = ({tshirt}) => {
    const {name, picture, price}= tshirt;
    return (
        <div>
            <img src={picture} alt="" />
        </div>
    );
};

export default Tshirt;