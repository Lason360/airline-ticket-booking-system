import React from 'react'
import {Routes, Route,Navigate } from 'react-router-dom'



import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Offers from '../pages/Offers';
import Login from '../pages/Login';
import Availability from '../pages/Availability';
import Seat from '../pages/Seat';
import User from '../pages/User';
import Register from '../pages/Register';
import Guest from '../pages/Guest';
import Registered_user from '../pages/Registered_user';
import Thankyou from '../pages/Thankyou';
import Profile from '../pages/Profile';




const Routers = () => {

  return (
   <Routes>
      <Route
        path="/"
        element={<Navigate to="/home" replace />} // Use Navigate within a Route element
      />

    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/services' element={<Services/>} /> 
    <Route path='/offers' element={<Offers/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/availability' element={<Availability/>} />
    <Route path='/seat' element={<Seat/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/guest' element={<Guest/>} />
    <Route path='/user' element={<User/>} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='/registered_user' element={<Registered_user/>} />
    <Route path='/thank-you' element={<Thankyou/>}/>
   </Routes>
  )
}

export default Routers