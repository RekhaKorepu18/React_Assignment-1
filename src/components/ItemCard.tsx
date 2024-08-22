import '../App.css';
import { FaHeart } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TitemData } from '../Types/products';
import { toast } from 'react-toastify';
import { useGlobalState } from '../StateContex';
import { combinedData } from '../data';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


export default function ItemCard({itemData}: {itemData: TitemData[]}) {

  const { wishlist, setWishlist, cart, setCart, cartState, setCartState,notify, setNotify, cartItem,setCartItem, selectedSize, setSelectedSize } = useGlobalState();

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
    const product: any = combinedData.find((item) => item.id === id);

    if (!product) return;
    if (cartState[id]) {
      navigate('/cart');
    } else {
      setCartState((prevCartState: any[]) => {
        const newCartState = { ...prevCartState, [id]: true };
        setCart(cart + 1);
       const itemInCart = cartItem.find(
          (item: any) => item.id === product.id && selectedSize[product.id] === item.selectedSize
        );
        if (!selectedSize[product.id]) {
          setSelectedSize((prevSize: string[]) => ({
            ...prevSize,
            [product.id]: 'M',
          }));
        }
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
            { ...product, quantity: 1, selectedSize: selectedSize[product.id]|| 'M'},
          ]);
          setCart(cart + 1);
          console.log(itemInCart);


         
        }
   

        return newCartState;
      });
    }
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
                  <button className='add-cart' onClick={() => handleCart(item.id)} >
                     {cartState[item.id] ? 'Go to Cart' : 'Add to cart'} 
                  
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







