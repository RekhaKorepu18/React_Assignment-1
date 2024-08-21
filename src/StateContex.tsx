import { createContext, useState} from 'react';
import React, {ReactNode} from 'react';
import { combinedData } from './data';
import { TitemData } from './Types/products';


const StateContext = createContext<any>({
    wishlist: [],                  
    setWishlist: () => {},         
    cart: 0,                      
    setCart: () => {},             
    cartState: [],                
    setCartState: () => {},        
    search: '',                    
    setSearch: () => {},         
    notify: [],                   
    setNotify: () => {},           
  });

export const StateProvider= ({ children }: {children: ReactNode} ) => {
    const [wishlist, setWishlist] = useState<boolean[]>(combinedData.map(() => false));
    const [cart, setCart] = useState(0);
    const [cartState, setCartState] = useState<boolean[]>(combinedData.map(() => false));
    const [search, setSearch] = useState('');
    const [notify, setNotify] = useState<boolean[]>(combinedData.map(() => false));
    const [cartItem, setCartItem] = useState<TitemData[]>([]);
    return (
        <StateContext.Provider
          value={{ wishlist, setWishlist, cart, setCart, cartState, setCartState, search, setSearch, notify, setNotify, cartItem, setCartItem }}
        >
          {children}
        </StateContext.Provider>
      );
}

export const useGlobalState = () => {
    const context = React.useContext(StateContext);
    if (context === undefined) {
      throw  Error;
    }
    return context;
  };
  