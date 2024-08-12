import React from 'react';
import Header from './components/header'
import ItemCard from './components/Item-card';
import './App.css';
import { discountItemData } from './data';
import { itemData } from './data';



function App() {
  return (
    <div className="App">
      <header className="App-header">
            <Header />
            <div className="discount-description">
            <h1><strong>Exclusive Deals</strong> </h1>
            <p>Get it on te trend wit our curated selection of best-selling styles.</p>
            </div>
            <ItemCard  itemData={discountItemData} />
            <h1 className="item-title"><strong>Order amazing products</strong></h1>
            <div className ="discount-items"><ItemCard  itemData={itemData} /></div>
          
      </header>
    </div>
  );
}

export default App;
