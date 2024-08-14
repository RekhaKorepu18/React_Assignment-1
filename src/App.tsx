import { ToastContainer } from 'react-toastify';
import { RenderProducts } from './components/Header';
import { discountItemData } from './data';
import { itemData } from './data';
import { useState } from 'react';


function App() {
    const combinedData = [...itemData, ...discountItemData];
   const [wishlist, setWishlist] = useState<boolean[]>(combinedData.map(() => false));
    const [cart, setCart] = useState(0);
    const [cartState, setCartState] = useState<boolean[]>(combinedData.map(() => false));
    const [search, setSearch] = useState('');
    const [notify, setNotify] = useState<boolean[]>(combinedData.map(() => false));
    return(
      <>
    <ToastContainer />
    <RenderProducts cart={cart} setCart={setCart} cartState={cartState} setCartState={setCartState} wishlist={wishlist} setWishlist={setWishlist} notify={notify} setNotify={setNotify} search={search} setSearch={setSearch} />
   
    </> )
  }

  
export default App;



