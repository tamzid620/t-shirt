import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../../Tshirt/Tshirt';
import "./Home.css"
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div className='home-container'>
            <div className="tshirts-container">
            {
                tshirts.map(tshirt => <Tshirt
                key={tshirt._id}
                tshirt = {tshirt}
                ></Tshirt>)
            }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;