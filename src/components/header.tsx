import ItemCard from './ItemCard';
import '../App.css';
import { filteredData} from '../data';
import { discountItemData } from '../data';
import { filteredDiscountData } from '../data';
import { itemData } from '../data';



export default function Header({count, searchItem, setSearchItem}: {count: number, searchItem: string, setSearchItem: (name: string) => void }){
    return (
        <>
        <nav className="header-box">
            <div className="nav-left">
            <img src="/assets/Store_icon.png" alt="store" className="store-icon" />
            <h1 className="title">Hanami</h1>
            </div>
            <div className="nav-right">
                <div className="search-container">
                    <input id="search-form" className="search-bar" placeholder="Search"
                    value = {searchItem}
                    onChange= {(product)=> setSearchItem(product.target.value)} />
                    <img src="/assets/search_icon.png" alt="Search Icon" className="search-icon" />
                </div>
                <div className="cart-icon">
                    <img src="/assets/cart_icon.png" alt="Cart Icon" />
                    {count > 0 && <div className="cart-count">{count}</div>}
                </div>
                <button className="login-button">LogIn</button>
            </div>
        </nav>
        </>
    )
}
export function RenderProducts({ cart, setCart, cartState, setCartState, wishlist, setWishlist,search, setSearch, notify, setNotify}: { cart: number, setCart: any, cartState: boolean[], setCartState: any, wishlist:boolean[], setWishlist: any, search:string, setSearch: any, notify:any, setNotify:any }){
    const isSearching = search.length > 0;
     console.log(filteredData.length);
    return (
      <div className="App">
        <header className="App-header">
          <Header count={cart} searchItem={search} setSearchItem={setSearch} />
  
           {isSearching ? (
            <>
              {(filteredData.length > 0 || filteredDiscountData.length >0 )? (
                <div className="filtered-items">
                   <ItemCard itemData={filteredData(search)} cart={cart} updateCart={setCart} cartState ={cartState} setCartState={setCartState} wishlist={wishlist} setWishlist= {setWishlist} notify={notify} setNotify={setNotify}/> 
                  <ItemCard itemData={filteredDiscountData(search)} cart={cart} updateCart={setCart} cartState ={cartState} setCartState={setCartState} wishlist={wishlist} setWishlist= {setWishlist} notify={notify} setNotify={setNotify}/>
                </div>
              ) : (
                <div className="not-found">
                  <h1> No items found</h1>
                </div>
              )}
            </>
          ) : (
            <>
             
              <div className="discount-description">
                <h1><strong>Exclusive Deals</strong></h1>
                <p>Get it on the trend with our curated selection of best-selling styles.</p>
              </div>
              <ItemCard itemData={discountItemData} cart={cart} updateCart={setCart} cartState ={cartState} setCartState={setCartState} wishlist={wishlist} setWishlist= {setWishlist} notify={notify} setNotify={setNotify}/> 
              <h1 className="item-title"><strong>Order amazing products</strong></h1>
              <div className="discount-items"> 
                <ItemCard itemData={itemData} cart={cart} updateCart={setCart} cartState ={cartState} setCartState={setCartState} wishlist={wishlist} setWishlist= {setWishlist} notify={notify} setNotify={setNotify} />
              </div>
            </>
          )} 
        </header>
      </div>
    );
  }


