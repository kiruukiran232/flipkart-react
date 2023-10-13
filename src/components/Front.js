import React from 'react'
import Sections from './Sections'
import Carousel from './Carousel'
import '../bootstrap/bootstrap.css'
import Home from './Home'
import Product from './Product'
import { BrowserRouter } from 'react-router-dom'

export default function Front() {
  return (
    <>
    
    <div className='container-fluid'>
    <Home />
        <Sections />
        <Carousel />
      <Product/>
      
    </div>
    
    </>
  )
}
