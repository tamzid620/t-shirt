import React from 'react';
import Me from '../Me/Me';
import Brother from '../Brother/Brother';
import Sis from '../Sis/Sis';

const Father = ({ring}) => {
    return (
        <div>
            <h3>Father</h3>
            <section className='flex'>
                <Me ring={ring}></Me>
                <Brother></Brother>
                <Sis></Sis>
            </section>
        </div>
    );
};

export default Father;