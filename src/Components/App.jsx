import 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home/Home';
import ProductDetails from './Screens/ProductDetails/ProductDetails';
import Navbar from './Partials/Navbar/Navbar';
import { ProductsContextProvider } from '../Context/ProductsContextProvider';
import CartContextProvider from '../Context/CartContextProvider';
import FeatureProduts from './Screens/FeatureProducts/FeatureProduts';
import ShoppingCart from './Screens/ShoppingCart/ShoppingCart';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar 
          onSearch={handleSearch}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/featureproducts" element={<FeatureProduts 
            searchQuery={searchQuery}
            />} 
            />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ProductsContextProvider>
  )
}
export default App
