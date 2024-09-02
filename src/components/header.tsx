import ItemCard from './ItemCard';
// import '../App.css';
import '../styles/Header.css'
import { useGlobalState } from '../context/StateContex';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { TitemData } from '../Types/products';


export let itemData: TitemData[] = [];
export let discountItemData: TitemData[] = [];
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
export function Products(){

  const {search,item, setItem, offerItem, setOfferItem} = useGlobalState();
  const isSearching = search.length > 0;
  async function fetchData() {
     try {
      const itemsResponse = await fetch('http://localhost:3000/api/Hanami_products/items', { mode: 'cors' });
      setItem(await itemsResponse.json());
     console.log('Fetched items:', itemData);  
      const discountedItemsResponse = await fetch('http://localhost:3000/api/Hanami_products/discountitems', { mode: 'cors' });
     setOfferItem(await discountedItemsResponse.json());
     console.log('Fetched discounted items:', discountItemData); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []); 

   function filteredData(search: string){ 
    return  item.filter((item: any) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )};
   function filteredDiscountData(search: string){ 
    return  offerItem.filter((item: any) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )};
  
 return (
      <div className="App">
        <header className="App-header">
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
              
              <ItemCard itemData={offerItem} /> 
              <h1 className="item-title"><strong>Order amazing products</strong></h1>
              <div className="discount-items"> 
                <ItemCard itemData={item}  />
              </div>
            </>
         )}  
        </header>
      </div>
    );
  }





