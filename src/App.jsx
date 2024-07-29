import React, { useState } from 'react';
import Navbar from "./Compomemts/Navbar/Navbar";

import { Route, Routes } from 'react-router-dom';
import Placeorder from './Pages/PlaceOrder/Placeorder';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home'; // Corrected path
import Footer from './Footer/Footer';
import Login from './Compomemts/Loginpopop/Login';

const App = () => {
  const [showLogin, SetLogin] = useState(false)
  return (
    <>
    {showLogin ? <Login SetLogin = {SetLogin}/> :  <></>}
    <div className='app'>
      <Navbar SetLogin = {SetLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Placeorder />} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
  
}

export default App;
