import React from 'react';
import "./Cart.css"
import Tshirt from '../../Tshirt/Tshirt';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>please add some products</p>
    }else{
        message = <div>
            <h5>Thanks for added products</h5>
        </div>
    }

    return (
        <div>
{/* condition css class */}
{/* use ternary  */}
            <h2 className={cart.length === 1 ? "blue": "red"}>Order Summary:{cart.length} </h2>
{/* ternary inside templete string */}
            <p className={`bold border ${cart.length ===3 ? "green": 'yellow'}`}>somthing</p>
            {
                cart.map(tshirt=> <p 
                    key={tshirt._id}
                    >{tshirt.name}
                     <button onClick={()=> handleRemoveFromCart(tshirt._id)}>remove</button>
                    </p>)
            }
{/* CONDITIONAL RENDERING --------------------- */}
{/* if else condition  */}
            {/* {message} */}
{/* ternary operator condition */}
            {/* {cart.length > 2 ? <h5 className='red'>you are ready to checkout</h5> : <h5 className='blue'>buy more products</h5>} */}
 {/*logical condition   */}
            {/* {cart.length ===2 && <p>double bonus!!!</p>} */}
{/* logical || */}
            {/* {cart.length ===3 || <h3>Three prouducts added</h3>} */}
        </div>
    );
};

export default Cart;