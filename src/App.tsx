import React from 'react';
import Header from './components/header'
import ItemCard from './components/Item-card';
import './App.css';
import { discountItemData } from './data';
import { itemData } from './data';
import { useState } from 'react';



function App() {
  const [cart, setCart]= useState(0);
  return (
    <div className="App">
      <header className="App-header">
            <Header count = {cart} />
            <div className="discount-description">
            <h1><strong>Exclusive Deals</strong> </h1>
            <p>Get it on te trend wit our curated selection of best-selling styles.</p>
            </div>
            <ItemCard  itemData={discountItemData} cart={cart} updateCart={setCart} />
            <h1 className="item-title"><strong>Order amazing products</strong></h1>
            <div className ="discount-items"><ItemCard  itemData={itemData} cart={cart} updateCart={setCart} /></div>
          
      </header>
    </div>
  );
}

export default App;
