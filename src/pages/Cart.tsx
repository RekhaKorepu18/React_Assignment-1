import { useGlobalState } from '../context/StateContex';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import '../styles/CartPage.css'


const CartPage = () => {
  const { cartItem, setCartItem, cart, setCart } = useGlobalState();
  const [popupState, setPopupState] = useState<{ show: boolean; item: { id: number; size: string } | null }>({ show: false, item: null });

  const CartEmpty = () => {
    if (cart === 0) {
      return <h2 className="cart-empty">Your cart is empty.</h2>;
    }
    return null;
  };

 
  useEffect(() => {
    const totalItems = cartItem.reduce((total: any, item: any) => total + item.quantity, 0);
    setCart(totalItems);
  }, [cartItem, setCart]);
  
  const Popup = ({ message, onConfirm, onCancel }: { message: string; onConfirm: () => void; onCancel: () => void }) => {
    return (
      <div className="popup">
        <div className="popup-container">
          <p className="popup-message">{message}</p>
          <div className="popup-buttons">
            <button className="popup-button confirm-button" onClick={onConfirm}>Yes</button>
            <button className="popup-button cancel-button" onClick={onCancel}>No</button>
          </div>
        </div>
      </div>
    );
  };

  const incrementQuantity = (id: number, size: string) => {
    setCartItem((prevCart: any[]) =>
      prevCart.map((item) =>
        item.id === id && item.selectedSize === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (id: number, size: string) => {
    const item = cartItem.find((item: any) => item.id === id && item.selectedSize === size);
    if (item && item.quantity === 1) {
      setPopupState({ show: true, item: { id, size } });
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

  const removeFromCart = (id: number, size: string) => {
    setCartItem((prevCart: any[]) =>
      prevCart.filter((item) => !(item.id === id && item.selectedSize === size))
    );
    setPopupState({ show: false, item: null });
  };

  const handleCancelRemove = () => {
    setPopupState({ show: false, item: null });
  };

  const totalPrice = cartItem.reduce(
    (total: any, item: any) => total + item.price * item.quantity, 0);

  const discount = cartItem.reduce(
    (total: any, item: any) => total + (item.discountRate || 0) * item.quantity,
    0
  );

  const totalAmount = totalPrice - discount;
  const savedMoney = totalPrice - totalAmount;

  const placeOrder = (totalAmount: number) => {
    toast.info(`Your total amount is $${totalAmount}. Thank you for shopping with us. Please visit again.`);
    setCart(0);
    setCartItem([]);
  };

  return (
    <>
     
        <div className="cart-page">
               {CartEmpty()}
          <div className="cart-items">
           <h1>Items in your Cart ({cart})</h1>
            {cartItem.map((product: any) => (
              <div key={`${product.id}-${product.selectedSize}`} className="cart-item">
                <img src={product.imageUrl} alt={product.name} />
                <h2>{product.name}</h2>
                <p>Size: {product.selectedSize}</p>

                <div className="quantity">
                  <button onClick={() => decrementQuantity(product.id, product.selectedSize)}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => incrementQuantity(product.id, product.selectedSize)}>+</button>
                </div>
                <p>${product.price}</p>
                <button className="remove-cart" onClick={() => setPopupState({ show: true, item: { id: product.id, size: product.selectedSize } })}>Remove from Cart</button>
              </div>
            ))}
          </div>
          {cart>0 &&
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
              <button className="order-now-btn" onClick={() => placeOrder(totalAmount)}>Order Now</button>
            </div>
          </div>
}
        </div>
      {popupState.show && (
        <Popup
          message="Do you want to remove this item from the cart?"
          onConfirm={() => removeFromCart(popupState.item!.id, popupState.item!.size)}
          onCancel={handleCancelRemove}
        />
      )}
    </>
  );
};
export default CartPage;


