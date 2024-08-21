import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { combinedData } from '../data';
import { TitemData } from '../Types/products';
import { FaHeart } from 'react-icons/fa';
import { useGlobalState } from '../StateContex';


const ItemPage = () => {
  const { id } : any= useParams();
   const navigate = useNavigate();
 // const [addcart, setAddcart]= useState()
 const [addtocart, setAddToCart] = useState<boolean[]>(combinedData.map(() => false));
  const { wishlist, setWishlist, cart, setCart} = useGlobalState();

  //const [product, setProduct] = useState(null);
  const [product, setProduct] = useState<TitemData | undefined>(undefined);
  const [selectedSize, setSelectedSize] = useState('');
  
  useEffect(() => {
    const Product: TitemData|undefined= combinedData.find((p: any) => p.id === parseInt(id));
    setProduct(Product);
  }, [id]);

  //console.log(product);

  const handleSize = (size: any) => {
    setSelectedSize(size);
  };

 
  const handleAddToCart = (id: number) => {
    if (addtocart[id]) {
      navigate('/cart'); 
    } else {
      setAddToCart((prevCartState: any) => ({
        ...prevCartState,
        [id]: true,
      }));
      setCart(cart + 1);
    }
  };

  const toggleWishlist = (id: number) => {
    setWishlist((prevWishlist: any[]) => {
      const newWishlist = [...prevWishlist];
      newWishlist[id] = !prevWishlist[id]; 
      return newWishlist;
    });
  };

  

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-page">
      <img src={product.imageUrl} alt='item' />
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <div className="size-options">
        {
          ['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
            <button 
              key={size}
            
              className={`size-container ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => handleSize(size) }
              disabled= {!product.isAvailable}
            >
              {size}
            </button> 
          ))
        }
      </div>
      <button onClick={()=>handleAddToCart(product.id)}  disabled={!product.isAvailable} >
        {addtocart[id] ? 'Go to Cart' : 'Add to Cart'}
      </button>
     
       <FaHeart
              className={`heart-icon ${wishlist[product.id] ? 'red' : 'white'}`}
              onClick={() => toggleWishlist(product.id)} />
  </div>  
  );
  
};

export default ItemPage;

