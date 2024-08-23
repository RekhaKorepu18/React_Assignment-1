import ItemCard from './ItemCard';
import '../App.css';
import { filteredData} from '../data';
import { discountItemData } from '../data';
import { filteredDiscountData } from '../data';
import { itemData } from '../data';
import { useGlobalState } from '../StateContex';
import { useNavigate } from 'react-router-dom';



export default function Header(){
  const navigate = useNavigate();
  const {cart, search, setSearch}= useGlobalState();
    return (
        <>
        <nav className="header-box">
            <div className="nav-left">
            <img src="/assets/Store_icon.png" alt="store" className="store-icon"  />
            <h1 className="title">Hanami</h1>
            </div>
            <div className="nav-right">
                <div className="search-container">
                    <input id="search-form" className="search-bar" placeholder="Search"
                    value = {search}
                    onChange= {(product)=> setSearch(product.target.value)} />
                    <img src="/assets/search_icon.png" alt="Search Icon" className="search-icon" />
                </div>
                <div className="cart-icon" onClick={()=>navigate('/cart')}>
                    <img src="/assets/cart_icon.png" alt="Cart Icon" />
                    {cart > 0 && <div className="cart-count">{cart}</div>}
                </div>
                <button className="login-button">LogIn</button>
            </div>
        </nav>
        </>
    )
}
export function RenderProducts(){
  //const { wishlist, setWishlist, cart, setCart, cartState, setCartState,search, setSearch, notify, setNotify } = useGlobalState();
   const {cart,search, setSearch} = useGlobalState();
    const isSearching = search.length > 0;
     
    return (
      <div className="App">
        <header className="App-header">
          {/* <Header cart={cart} searchItem={search} setSearchItem={setSearch} /> */}
  
           {isSearching ? (
            <>
              {(filteredData.length > 0 || filteredDiscountData.length >0 )? (
                <div className="filtered-items">
                   <ItemCard itemData={filteredData(search)}  /> 
                  <ItemCard itemData={filteredDiscountData(search)} />
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
              <ItemCard itemData={discountItemData} /> 
              <h1 className="item-title"><strong>Order amazing products</strong></h1>
              <div className="discount-items"> 
                <ItemCard itemData={itemData}  />
              </div>
            </>
          )} 
        </header>
      </div>
    );
  }


