import { ToastContainer } from 'react-toastify';
import { RenderProducts } from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StateProvider } from './StateContex';
import ItemPage from './pages/IndividualProduct';


function App() {
  return (
    <StateProvider>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<RenderProducts />} />
          <Route path="/product/:id" element={<ItemPage />} />
        </Routes>
      </Router>
    </StateProvider>
  );
}

  
export default App;



