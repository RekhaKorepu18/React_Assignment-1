import '../App.css';
// src/index.js or src/index.tsx
import { BsHeart } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TitemData } from '../data';


export default function ItemCard({itemData}: {itemData : TitemData[]}){
    console.log(itemData);
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
            <button className='add-cart'> Add to cart </button>
            {item.isAvailable ? <BsHeart className="heart-icon" />: <button>Notify me</button>} 
           
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