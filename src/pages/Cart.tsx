import { useGlobalState } from '../StateContex';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const CartPage = () => {
  const { cartItem, setCartItem, cart,setCart} = useGlobalState();

  if (cartItem.length===0) {
    return <h2 className="cart-empty">Your cart feels lite</h2>;
  }


const incrementQuantity = (id: number, size: string) => {
  setCartItem((prevCart: any[]) =>
    prevCart.map((item) =>
      item.id === id && item.selectedSize === size
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};
const decrementQunantity = (id: number, size: string) => {
  const item = cartItem.find((item: any) => item.id === id && item.selectedSize === size);
  if (item && item.quantity === 1) {
    if (window.confirm("Do you want to remove this item from the cart?")) {
      removeFromCart(id, size);
    }
  } else {
   
    setCartItem((prevCart: any[]) =>
      prevCart.map((item) =>
        item.id === id && item.selectedSize === size
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }
};


const removeItem = (id: number, size: string) => {
  if (window.confirm("Do you want to remove from  cart?")) {
    removeFromCart(id, size);
  }
};
const removeFromCart = (id: number, size: string) => {
  setCartItem((prevCart: any[]) =>
    prevCart.filter((item) => !(item.id === id && item.selectedSize === size))
  );
};




  const totalPrice = cartItem.reduce(
    (total:any, item:any) => total + item.price * item.quantity,0);

  const discount = cartItem.reduce(
    (total:any, item: any) => total + (item.discountRate || 0) * item.quantity,
    0
  );
  
  const totalAmount = totalPrice - discount;
  const savedMoney = totalPrice-totalAmount;
  const placeOrder=() => {

    toast.info("Thank you for shopping with us. Please Visit again");
    setCart(0);
    setCartItem([]);
    console.log(cartItem);
    if (cartItem.length===0) {
      return <h2 className="cart-empty">Your cart feels lite</h2>;
    }
  }


  return (
    <>

    <div className="cart-page">
      <div className="cart-items">
        <h1>Items in your Cart ({cart})</h1>
        {cartItem.map((product: any) => (
          <div key={`${product.id}-${product.selectedSize}`} className="cart-item">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Size: {product.selectedSize}</p>

            <div className="quantity">
              <button onClick={() => decrementQunantity(product.id, product.selectedSize)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => incrementQuantity(product.id, product.selectedSize)}>+</button>
            </div>
            <p>${product.price}</p>
            <button className="remove-cart"onClick={() => removeItem(product.id, product.selectedSize)}>Remove from Cart</button>
          </div>
        ))}
      </div>
      <div className="payment-details">
        <h2>Payment Details</h2>
        <div className="details">
          <p>Total Price: <span>${totalPrice}</span></p>
          <p>Discount: <span>-${discount}</span></p>
          <p>Delivery Charges: <span>Free</span></p>
          <p>Total Amount: <span>${totalAmount}</span></p>
        </div>
        <p className="savings">You saved ${savedMoney} on the order.</p>
        <div className="order-summary">
          <div className="total-price">Total Price: ${totalAmount}</div>
          <button className="order-now-btn" onClick={placeOrder}>Order Now</button>
        </div>
      </div>
    </div>
  </>
  );
};


export default CartPage;

    
