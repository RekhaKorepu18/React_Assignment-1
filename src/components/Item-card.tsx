import '../App.css';
// src/index.js or src/index.tsx
import { BsHeart } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TitemData } from '../data';
import React, { useState } from 'react';


export default function ItemCard({itemData, cart, updateCart }: {itemData : TitemData[], cart: any, updateCart: any}){
   // console.log(itemData);
   const [wishlist, setWishlist] = useState<boolean[]>(itemData.map(() => false));

   const toggleWishlist = (idx: number) => {
      setWishlist(isLikedArray => {
         const newlist= [...isLikedArray];
         newlist[idx] = !newlist[idx];
         return newlist;
      } )
   }


     function handleCart(){
       updateCart(cart+1);
     }

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
            <button className='add-cart' onClick={() =>handleCart()}> Add to cart </button>
            {item.isAvailable ?  <FaHeart
                    className={`heart-icon ${wishlist[index] ? 'red' : 'white'}`}
                    onClick={() => toggleWishlist(index)}
                  />: <button>Notify me</button>} 
           
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
