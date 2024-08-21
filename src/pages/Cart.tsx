// import React, {useEffect, useState} from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
import { TitemData } from '../Types/products';
import { useGlobalState } from '../StateContex';

export const CartPage = () => {
     const {cartItem, selectedSize} = useGlobalState();

     if(cartItem.length===0){
        return <div> Cart is empty.</div>
     }
     console.log(selectedSize[1]);
     return (
        <div className="cart-page">
          <h1>Items in your Cart</h1>
          {cartItem.map((product: TitemData) => (
            <div key={product.id} className="cart-item">
              <img src={product.imageUrl} alt={product.name} />
              <h2>{product.name}</h2>
              <p> {selectedSize[product.id]}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      );
};
export default CartPage;
    
