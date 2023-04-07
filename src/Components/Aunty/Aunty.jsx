import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
            <h3>Aunty</h3>
            <section className='flex'>
                <Cousin>Dalo</Cousin>
                <Cousin>Ealo</Cousin>
                <Cousin hasFriend ={true}>Falo</Cousin>
            </section>
        </div>
    );
};

export default Aunty;