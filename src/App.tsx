import { ToastContainer } from 'react-toastify';
import { RenderProducts } from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StateProvider } from './StateContex';
import ItemPage from './pages/IndividualProduct';
import CartPage from './pages/Cart';
import Header from './components/Header';


function App() {
 
  return (
    <StateProvider>
      <Router>
      <Header  />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<RenderProducts />} />
          <Route path="/product/:id" element={<ItemPage />} />
          <Route path="/Cart" element={<CartPage />} />
        </Routes>
      </Router>
    </StateProvider>
  );
}

  
export default App;



