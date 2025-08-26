import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Category from './pages/category';
import ProductMain from './pages/productDetails'
import Order from './pages/Order';
import SuccessOrder from './pages/SuccessOrder';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Product_list from './pages/Product_list';
import { CartProvider } from './components/CartContext';   
import Cartpage from './pages/Cartpage';
import Login from './pages/Login';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/category/:name' element={<Product_list/>}/>
          <Route path="/product/:id" element={<ProductMain/>} />
          <Route path='/cart' element={<Cartpage/>}/>  
          <Route path='/order' element={<Order/>}/>
          <Route path='/success' element={<SuccessOrder/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
