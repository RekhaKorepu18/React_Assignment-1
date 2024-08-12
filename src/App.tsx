import React from 'react';
import Header from './components/header'
import ItemCard from './components/Item-card';
import './App.css';
import { filteredData } from './data';
import { discountItemData } from './data';
import { filteredDiscountData } from './data';
import { itemData } from './data';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [cart, setCart] = useState(0);
  const [search, setSearch] = useState('');

  // console.log(search);
  // console.log(filteredData);
  // console.log(filteredDiscountData);
  const searching = search.length > 0;
  console.log(searching);
   console.log(filteredData.length);
  return (
    <div className="App">
      <header className="App-header">
        <Header count={cart} searchItem={search} setSearchItem={setSearch} />

        {searching ? (
          <>
            {(filteredData.length > 0 || filteredDiscountData.length >0 )? (
              <div className="filtered-items">
                <ItemCard itemData={filteredData(search)} cart={cart} updateCart={setCart} />
                <ItemCard itemData={filteredDiscountData(search)} cart={cart} updateCart={setCart} />
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
            <ItemCard itemData={discountItemData} cart={cart} updateCart={setCart} />
            <h1 className="item-title"><strong>Order amazing products</strong></h1>
            <div className="discount-items">
              <ItemCard itemData={itemData} cart={cart} updateCart={setCart} />
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default App;



