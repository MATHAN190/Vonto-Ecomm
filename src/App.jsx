
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Category from './pages/category';
import ProductDetails from './pages/productDetails'
import Order from './pages/Order'
import SuccessOrder from './pages/SuccessOrder';
import NavBar from './components/NavBar';
function App() {

  return (
    <>
       <BrowserRouter>
           <NavBar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/category' element={<Category/>}/>
               <Route path='/productdetails' element={<ProductDetails/>}/>
              <Route path='/order' element={<Order/>}/>
              <Route path='/success' element={<SuccessOrder/>}/>
            </Routes>
       
       </BrowserRouter>
    </>
  )
}

export default App
