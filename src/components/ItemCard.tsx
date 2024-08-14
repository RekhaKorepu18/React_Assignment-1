import '../App.css';
import { FaHeart } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TitemData } from '../Types/products';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ItemCard({
  itemData,
  cart,
  updateCart,
  cartState,
  setCartState,
  wishlist,
  setWishlist,
  notify,
  setNotify
}: {
  itemData: TitemData[],
  cart: number,
  updateCart: any,
  cartState: boolean[],
  setCartState: any,
  wishlist: boolean[],
  setWishlist: any,
  notify: any,
  setNotify: any
}) {


  const toggleWishlist = (id: number) => {
    setWishlist((prevWishlist: any[]) => ({
      ...prevWishlist,
      [id]: !prevWishlist[id]
    }));
  };

  const handleClick = (id: number) => {
    if (notify[id]=== undefined) {
      return;
    }
    console.log("hi",notify[id]);
     setNotify((prev: any) => {
      const updatedNotify = {...prev, [id]:!prev[id]};
      return updatedNotify;
        
     });
     toast.info("Notify me when the item is available!");
     console.log("hello",notify[id]);
}

  const handleCart = (id: number) => {
    setCartState((prevCartState: any[]) => {
      const newCartState = {
        ...prevCartState,
        [id]: !prevCartState[id]
      };

      if (newCartState[id]) {
        updateCart(cart + 1);
      } else {
        updateCart(cart - 1);
      }

      return newCartState;
    });
  };

  return (
    <div className="item">
      <div className="item-card">
        {itemData.map((item) => (
          <div key={item.id}>
            <div className={`item-image ${!item.isAvailable ? 'dimmed' : ''}`}>
              <div className="item-image">
                <img src={item.imageUrl} alt='item' />
              </div>
              <div className="image-description">
                <div><strong>{item.name}</strong></div>
                <div className="price-rating">
                  <div>${item.price}</div>
                  <div>|</div>
                  <div>{item.rating} ⭐</div>
                </div>
                <div className="wishlist-notify">
                  <button className='add-cart' onClick={() => handleCart(item.id)}>
                    {cartState[item.id] ? 'Remove' : 'Add to cart'}
                  </button>
                  {item.isAvailable ? (
                    <FaHeart
                      className={`heart-icon ${wishlist[item.id] ? 'red' : 'white'}`}
                      onClick={() => toggleWishlist(item.id)}
                    />
                  ) : (
                    <div>
                      <button className="notify-button" onClick={()=>handleClick(item.id)}   disabled={notify[item.id] === true}>Notify</button>
                    </div>
                  )}
                </div>
                <div className="discount-item">
                  {item.isDiscount && <span className="discount">Get at {item.discountRate}% Off</span>}
                </div>
              </div>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}







