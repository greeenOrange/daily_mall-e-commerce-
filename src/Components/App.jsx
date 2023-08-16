import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home/Home';
import ProductDetails from './Screens/ProductDetails/ProductDetails';
import Navbar from './Partials/Navbar/Navbar';
import { ProductsContextProvider } from '../Context/ProductsContextProvider';
import CartContextProvider from '../Context/CartContextProvider';
import FeatureProduts from './Screens/FeatureProducts/FeatureProduts';
import ShoppingCart from './Screens/ShoppingCart/ShoppingCart';
import UseDarkSide from './Partials/UseDarkSide/UseDarkSide';
import Wishlist from './Screens/Wishlist/Wishlist';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Partials/Footer/Footer';

function App() {
  const [colorTheme, setTheme] = UseDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
  <div className="h-screen w-full overflow-hidden bg-white
  shadow-md dark:bg-gray-800 dark:border-gray-700 scroll_bar"> 
    <ProductsContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar
          colorTheme={colorTheme} 
          setTheme={setTheme} 
          darkSide={darkSide} 
          setDarkSide={setDarkSide} 
          onSearch={handleSearch}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/shops" element={<FeatureProduts 
            searchQuery={searchQuery}
            />} 
            />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </CartContextProvider>
    </ProductsContextProvider>
  </div>
  )
}
export default App
