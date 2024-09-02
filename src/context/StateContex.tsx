import { createContext, useState} from 'react';
import React, {ReactNode} from 'react';
import { TitemData } from '../Types/products';


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
    item:[],
    setItem:()=>{} ,
    offerItem:[],
    setOfferItem:()=>{},
    combinedData:[]  
  });

export const StateProvider= ({ children }: {children: ReactNode} ) => {
  const [item,setItem] = useState<TitemData[]>([])
    const [offerItem,setOfferItem] = useState<TitemData[]>([])
   const combinedData = [...item, ...offerItem];
    const [wishlist, setWishlist] = useState<boolean[]>(combinedData.map(() => false));
    const [cart, setCart] = useState(0);
    const [cartState, setCartState] = useState<boolean[]>(combinedData.map(() => false));
    const [search, setSearch] = useState('');
    const [notify, setNotify] = useState<boolean[]>(combinedData.map(() => false));
    const [cartItem, setCartItem] = useState<TitemData[]>([]);
    const [selectedSize, setSelectedSize] = useState<string[]>(['M']);
    
    
    return (
        <StateContext.Provider
          value={{ wishlist, setWishlist, cart, setCart, cartState, setCartState, search, setSearch, notify, setNotify, cartItem, setCartItem, selectedSize, setSelectedSize, item, setItem, offerItem, setOfferItem,combinedData }}
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

 
  