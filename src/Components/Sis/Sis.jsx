import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sis = () => {
    const [money]= useContext(MoneyContext)
    return (
        <div>
            <h2>Sister</h2>
            <p><small>grandpa Money: {money}</small></p>
        </div>
    );
};

export default Sis;