import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const  [money, setMoney]= useContext(MoneyContext)
    return (
        <div>
            <h2>Uncle</h2>
            <p><small>grandpa money: {money}</small></p>
            <button onClick={()=> setMoney(money + 1000)}>send 1000 taka</button>

            <section className='flex'>
                <Cousin>Aalo</Cousin>
                <Cousin>Balo</Cousin>
                <Cousin>Calo</Cousin>
            </section>
        </div>
    );
};

export default Uncle;