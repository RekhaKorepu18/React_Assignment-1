// import '../App.css';
import '../styles/ItemCard.css'
import '../styles/Header.css'
import { FaHeart } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TitemData } from '../Types/products';
import { toast } from 'react-toastify';
import { useGlobalState } from '../context/StateContex';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


export default function ItemCard({ itemData }: {itemData: TitemData[]}) {

  const { wishlist, setWishlist, cart, setCart, notify, setNotify, cartItem,setCartItem, selectedSize} = useGlobalState();
   const toggleWishlist = (id: number) => {
    setWishlist((prevWishlist: any[]) => {
      const newWishlist = [...prevWishlist];
      newWishlist[id] = !prevWishlist[id]; 
      return newWishlist;
    });
  };

   const handleClick = (id: number) => {
     setNotify((prev: any[]) => {
      const updatedNotify = {...prev, [id]:!prev[id]};
      return updatedNotify;
        
     });
     toast.info("Notify me when the item is available!");
   
}

  const handleCart = (product: any) => {
    if (!product) return;
    const itemInCart = cartItem.find(
      (item: any) => item.id === product.id && selectedSize[product.id] === item.selectedSize
    );
  
    if (itemInCart) {
      setCartItem((prevCart: any[]) =>
        prevCart.map((item) =>
          item.id === product.id && item.selectedSize === selectedSize[product.id]
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
    );
    } else {
     setCartItem((prevCart: any[]) => [
        ...prevCart,
        { ...product, quantity: 1, selectedSize: selectedSize[product.id] || 'M' },
      ]);
    }
    setCart(cart+1);
  };
  
  const handleNavigateToCart = () => {
    navigate('/cart');
  };
  
  
  const navigate = useNavigate();
  const goToProductPage = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="item">
      <div className="item-card">
        {itemData.map((item: any) => (
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
                  
                  {item.isAvailable ? (
        
                  <button className="add-cart"
                     onClick={() => {
                     const itemInCart = cartItem.find(
                        (p: any) => p.id === item.id 
                     );

                    if (itemInCart) { handleNavigateToCart(); }
                     else { handleCart(item);}
                  }}
                   >
                  {cartItem.find((p: any) => item.id === p.id )
                      ? 'Go to Cart'
                      : 'Add to Cart'}
                  </button>

                  ) : (
                    <div>
                      <button className="notify-button" onClick={()=>handleClick(item.id)}   disabled={notify[item.id] === true}>Notify</button>
                    </div>
                  )}
                    <FaHeart
                      className={`heart-icon ${wishlist[item.id] ? 'red' : 'white'}`}
                      onClick={() => toggleWishlist(item.id)}
                    />
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







