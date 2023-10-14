import React from 'react'
import './bootstrap/bootstrap.css'
import Home from './components/Home'
import Product from './components/Product'
import { useState,useEffect,createContext} from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Sections from './components/Sections'
import Carousel from './components/Carousel'
import Forms from './components/Forms'
import Front from './components/Front'
import List from './components/List'
import Error from './components/Error'

export default function App() {
  return (
    <>
    <BrowserRouter>
    
    
    <div className='container-fluid'>
    {/* <Home />
        <Sections />
        <Carousel />
      <Product/> */}
      
      {/* <Productdetails />
      <Forms /> */}
      <Routes>
      <Route path='/' element={<Front />} />
      <Route path='/Productdetails' element={<List />} />
      <Route path='*' element={<Error />} />
      </Routes>
    </div>
    
    </BrowserRouter>
    </>
  )
}
