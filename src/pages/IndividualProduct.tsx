import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { combinedData } from '../data';
import { TitemData } from '../Types/products';
import { FaHeart } from 'react-icons/fa';
import { useGlobalState } from '../StateContex';
import Header from '../components/Header';

const ItemPage = () => {
  const { id }: any = useParams();
  const navigate = useNavigate();

  const [addtocart, setAddToCart] = useState<boolean[]>(combinedData.map(() => false));
  const { wishlist, setWishlist, cart, setCart, cartItem, setCartItem, selectedSize, setSelectedSize, search, setSearch } = useGlobalState();

  const [product, setProduct] = useState<TitemData | undefined>(undefined);

  useEffect(() => {
    const Product: TitemData | undefined = combinedData.find((p: any) => p.id === parseInt(id));
    setProduct(Product);
  }, [id]);

  const handleSize = (id: number, size: string) => {
    setSelectedSize((prevSize: string[]) => ({
      ...prevSize,
      [id]: size,
    }));
  };

  const handleAddToCart = (product: TitemData) => {
    if (addtocart[product.id]) {
      navigate('/cart');
    } else {
      setAddToCart((prevCartState: any) => ({
        ...prevCartState,
        [product.id]: true,
      }));
      setCart(cart + 1);
      if (!(cartItem.includes(product))) {
        setCartItem((prevCart: TitemData[]) => [...prevCart, product]);
      }
    }

    if (!selectedSize[product.id]) {
      setSelectedSize((prevSize: string[]) => ({
        ...prevSize,
        [product.id]: 'M',
      }));
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
    <div>
      <Header count={cart} searchItem={search} setSearchItem={setSearch} />
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
            <button className="add-cart" onClick={() => handleAddToCart(product)} disabled={!product.isAvailable}>
                Add to cart
            </button>
            <FaHeart
              className={`heart-icon ${wishlist[product.id] ? 'red' : 'white'}`}
              onClick={() => toggleWishlist(product.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;


