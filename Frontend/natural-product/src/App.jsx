import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import About from './pages/About'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Login from './pages/Login'
import Orders from './pages/Orders'
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>

      <Route  path="/" element={<Home/>} />
      <Route  path="/cart" element={<Cart/>} />
      <Route path="/place-order" element ={<PlaceOrder/>}/>
      <Route  path="/about" element={<About />} />
      <Route  path="/contact" element={<Contact/>} />
      <Route  path="/collection" element={<Collection/>} />
      <Route  path="/product/:productId" element={<Product/>} />
      <Route  path="/login" element={<Login/>} />
      <Route  path="/orders" element={<Orders/>} />
      </Routes>
       <Footer/> 
    </div>
  )
}

export default App