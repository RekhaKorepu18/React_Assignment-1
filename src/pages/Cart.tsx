// import React, {useEffect, useState} from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
import { TitemData } from '../Types/products';
import { useGlobalState } from '../StateContex';

// export const CartPage = () => {
//      const {cartItem, selectedSize, setCartItem} = useGlobalState();

//      if(cartItem.length===0){
//         return <div> Cart is empty.</div>
//      }
//      const handleIncrement = (id: number, size: string) => {
//       setCartItem((prevCart: any[]) =>
//         prevCart.map((item) =>
//           item.id === id && item.selectedSize === size ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       );
//     };
//     const handleDecrement = (id: number, size: string) => {
//       setCartItem((prevCart: any[]) =>
//         prevCart.map((item) =>
//           item.id === id && item.selectedSize === size && item.quantity > 1
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//       );
//     };
     
//      return (
//         <div className="cart-page">
//           <h1>Items in your Cart</h1>
//           {cartItem.map((product: any) => (
//             <div key={product.id} className="cart-item">
//               <img src={product.imageUrl} alt={product.name} />
//               <h2>{product.name}</h2>
//                <p> size :{selectedSize[product.id]}</p> 
             
//           <div className="quantity-controls">
//             <button onClick={() => handleDecrement(product.id, selectedSize[product.id])}>-</button>
//             <span>{product.quantity}</span>
//             <button onClick={() => handleIncrement(product.id, selectedSize[product.id])}>+</button>
//           </div>
//               <p>${product.price}</p>
//             </div>
//           ))}
//         </div>
//       );
// };
// export default CartPage;
export const CartPage = () => {
  const { cartItem, setCartItem } = useGlobalState();

  if (cartItem.length === 0) {
    return <div>Cart is empty.</div>;
  }

  const handleIncrement = (id: number, size: string) => {
    setCartItem((prevCart: any[]) =>
      prevCart.map((item) =>
        item.id === id && item.selectedSize === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrement = (id: number, size: string) => {
    setCartItem((prevCart: any[]) =>
      prevCart.map((item) =>
        item.id === id && item.selectedSize === size && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="cart-page">
      <h1>Items in your Cart</h1>
      {cartItem.map((product: any) => (
        <div key={`${product.id}-${product.selectedSize}`} className="cart-item">
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Size: {product.selectedSize}</p>

          <div className="quantity-controls">
            <button onClick={() => handleDecrement(product.id, product.selectedSize)}>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => handleIncrement(product.id, product.selectedSize)}>+</button>
          </div>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;

    
