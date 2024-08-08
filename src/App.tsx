/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import './App.css';
import Places from './Places';

function App() {
  return (
    <div className="App">
     
        <h1> Places to Visit in Bangalore </h1>
        <p className="para"> Bangalore, often called the "Garden City" of India, is a vibrant metropolis known for its lush green parks, pleasant weather, and rich cultural heritage. As a hub for technology and innovation, it offers a blend of modernity and tradition. Tourists can explore its historic landmarks like Bangalore Palace and Tipu Sultan's Summer Palace, or enjoy the serene beauty of Lalbagh Botanical Garden and Cubbon Park. The city's thriving food scene, bustling markets, and nearby hill stations like Nandi Hills make it a popular destination for travelers seeking both urban and natural experiences.</p>
        <div className= "places">
  
        <Places title="Nandi Hills" image="https://as1.ftcdn.net/v2/jpg/02/79/79/74/1000_F_279797473_aZnYhvLU8jKXhBgoX3uVI6CvjQvEiMD9.jpg" />
        <Places title="Banglore Palace" image="https://www.karnataka.com/wp-content/uploads/2010/09/bangalore-palace-main-entrance-1280x720.jpg" />
        <Places title="LalBagh" image="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSmE81sfbomzB-nLta7FLHR7r1mIlIqHUpfO0YGAQJgtY85qwZiWnSAxYwxcxbTUuasoLjVBvovL4xbXkK5sLuIXNIe0vQ2vPbotoRN1A" />
         
        
     </div>
     <button className="btn"> Plan your Trip</button>
     <br ></br>
     <a
          className="website"
          href="https://www.tripadvisor.in/Attractions-g297628-Activities-Bengaluru_Bangalore_District_Karnataka.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to explore more places in banglore.
        </a>
    </div>
  );
}

export default App;
