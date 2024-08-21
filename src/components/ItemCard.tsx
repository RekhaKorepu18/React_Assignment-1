import '../App.css';
import { FaHeart } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TitemData } from '../Types/products';
import { toast } from 'react-toastify';
import { useGlobalState } from '../StateContex';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



export default function ItemCard({itemData}: {itemData: TitemData[]}) {

  const { wishlist, setWishlist, cart, setCart, cartState, setCartState,notify, setNotify } = useGlobalState();

  const navigate = useNavigate();
 
  
   const toggleWishlist = (id: number) => {
    setWishlist((prevWishlist: any[]) => {
      const newWishlist = [...prevWishlist];
      newWishlist[id] = !prevWishlist[id]; 
      return newWishlist;
    });
  };
 

  const handleClick = (id: number) => {
    if (notify[id]=== undefined) {
      return;
    }
     setNotify((prev: any[]) => {
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
        setCart(cart + 1);
      } 
      

      return newCartState;
    });
  };

  const goToProductPage = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="item">
      <div className="item-card">
        {itemData.map((item: TitemData) => (
          <div key={item.id} >
            <div className={`item-image ${!item.isAvailable ? 'dimmed' : ''}`}>
              <div className="item-image" onClick={() => goToProductPage(item.id)}>
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
                  <button className='add-cart' onClick={() => handleCart(item.id)} disabled={cartState[item.id] === true} >
                    {/* {cartState[item.id] ? 'Remove' : 'Add to cart'} */}
                    Add to cart
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







