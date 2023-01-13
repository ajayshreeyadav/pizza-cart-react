import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import Navigation from './components/Navigation';
import Cart from './pages/Cart';
import SingleProducts from './pages/SingleProducts';
import { CartContext } from './CartContext';
import { useEffect, useState } from 'react';
import { getCart, storeCart } from './helpers';

const App = () => {
  const [cart, setCart] = useState({});

  // Fetch cart from local storage

  useEffect(() => {
    getCart().then(cart => {
      setCart(JSON.parse(cart));
    });
  }, []);

  useEffect(() => {
    storeCart(JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, setCart }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" exact element={<ProductsPage />} />
          <Route path="/products/:_id" element={<SingleProducts />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
