import { useNavigate, useParams } from 'react-router-dom';
import { TitemData } from '../Types/products';
import { FaHeart } from 'react-icons/fa';
import { useGlobalState } from '../context/StateContex';
import { toast } from 'react-toastify';
import { IoChevronBack } from "react-icons/io5";
import '../styles/IndividualPage.css';
import '../styles/Header.css'

const ItemPage = () => {

  const { id }: any = useParams();
  console.log(id);
 
  const { wishlist, setWishlist, cart, setCart,cartItem, setCartItem, selectedSize, setSelectedSize, combinedData, notify, setNotify } = useGlobalState();

  const navigate = useNavigate();
 ;

    const product: any = combinedData.find((p: any) => p.id === parseInt(id));



  const handleSize = (id: number, size: string) => {
    setSelectedSize((prevSize: string[]) => ({
      ...prevSize,
      [id]: size,
    }));
  };
  const handleClick = (id: number) => {
     setNotify((prev: any[]) => {
      const updatedNotify = {...prev, [id]:!prev[id]};
      return updatedNotify;
        
     });
     toast.info("Notify me when the item is available!");
   
}

  const handleAddToCart = (product: TitemData) => {
   
    if (!selectedSize[product.id]) {
      toast.error("Please select a size before adding to cart.");
      return;
    }

    const itemInCart = cartItem.find(
      (item: any) => item.id===product.id && selectedSize[product.id]===item.selectedSize
       );

    if(itemInCart){
      setCartItem((prevCart: any[])=>
       prevCart.map((item)=> item.id===product.id && item.selectedSize === selectedSize[product.id]
        ? {...item, quantity: item.quantity+1 }
        : item))
        setCart(cart+1);
      }
     
      else{
        setCartItem((prevCart: any[])=> 
         [ ...prevCart, {...product, quantity: 1, selectedSize: selectedSize[product.id]},

        ]);
        setCart(cart + 1);
      }
      
    }

  const toggleWishlist = (id: number) => {
    setWishlist((prevWishlist: any[]) => {
      const newWishlist = [...prevWishlist];
      newWishlist[id] = !prevWishlist[id];
      return newWishlist;
    });
  };

  if (!product) return <div>Loading...</div>;


  return (
    <div className="product-page-container">
    <button
      className="back-button"
      onClick={() => navigate('/')} 
    >
     <IoChevronBack />
    </button>
    <div>
     
      <div className="product-page-container">
        <div className="product-page">
          <img src={product.imageUrl} alt="item" />
          <div className="product-info">
            <h1>{product.name}</h1>
            <div>{product.rating} ⭐</div>
            <p>${product.price}</p>
            <div className="size-options">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  className={`size-container ${selectedSize[product.id] === size ? 'selected' : ''}`}
                  onClick={() => handleSize(product.id, size)}
                  disabled={!product.isAvailable}
                >
                  {size}
                </button>
              ))}
            </div>
            {product.isAvailable? (
            <button className="add-cart" onClick={() => handleAddToCart(product)} disabled={!product.isAvailable}>
                Add to cart
            </button>):
            (
              <div>
              <button className="notify-button" onClick={()=>handleClick(product.id)}   disabled={notify[product.id] === true}>Notify</button>
            </div>
            )
            }
            <FaHeart
              className={`heart-icon ${wishlist[product.id] ? 'red' : 'white'}`}
              onClick={() => toggleWishlist(product.id)}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ItemPage;


