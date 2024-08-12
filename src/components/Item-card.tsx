import '../App.css';
import { FaHeart } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TitemData } from '../data';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ItemCard({itemData, cart, updateCart}: {itemData : TitemData[], cart: number, updateCart: any}){
   // console.log(itemData);
   const [wishlist, setWishlist] = useState<boolean[]>(itemData.map(() => false));
   const [cartState, setCartState] = useState<boolean[]>(itemData.map(() => false));

   const toggleWishlist = (idx: number) => {
      setWishlist(isLikedArray => {
         const newlist= [...isLikedArray];
         newlist[idx] = !newlist[idx];
         return newlist;
      } )
   }

   const handleClick = (event: any) => {
      event.currentTarget.disabled = true;
      toast.info("Notify me when the item is available!");
   
}

   const handleCart = (idx: number) => {
      setCartState(prevCart => {
        const newCart = [...prevCart];
        newCart[idx] = !newCart[idx];
        
        // Increment or decrement cart count
        if (newCart[idx]) {
          updateCart(cart + 1);
        } else {
          updateCart(cart - 1);
        }
  
        return newCart;
      });
    };


    return (
       <div className ="item "> 
       
        
        <div className="item-card">
        {itemData.map((item, index) => (
         
        <div key={index}>
            <div className={`item-image ${!item.isAvailable ? 'dimmed' : ''}`}>
            <div className ="item-image">
              <img src={item.imageUrl} alt= 'item' />
              </div>
              <div className= "image-description">
            <div><strong>{item.name}</strong></div>
            <div className = "price-rating">
            <div>${item.price}</div>
            <div>|</div>
            <div> {item.rating} ⭐</div>
            </div>
            <div className ="wishlist-notify">
            <button className='add-cart' onClick={() =>handleCart(index)}> {cartState[index] ? 'Remove from cart' : 'Add to cart'}
            </button>
            {item.isAvailable ?  <FaHeart
                    className={`heart-icon ${wishlist[index] ? 'red' : 'white'}`}
                    onClick={() => toggleWishlist(index)}
                  />: <div><button onClick={handleClick}>Notify me</button>
                          <ToastContainer />  </div>
                        } 
           
            </div>
            <div className="discount-item">
            {item.isDiscount && <span>Get at {item.discountRate}% Off</span> }
            </div>
            </div>
            </div>
          </div>
        ))}
       </div>
       </div>
   );
}
