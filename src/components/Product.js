import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import '../App.css'

export default function Product() {
    const [products,setProducts]=useState([{}])
    useEffect(()=>{
        axios.get('https://github.com/kiruukiran232/flipkart-react/blob/main/products').then(res=>setProducts(res.data))
    },0)
    console.log(products);
  return (
      <>
      <div className='kk row'>
        {products.map((e,i)=>{
return(
    <div className='cards col-md-3'>
      <div>
        <img src={e.thumbnail} height="200px" className='thumbnail' />
        <p className='title'>{e.title}</p>
        <p className='title'>Rs.{e.price}</p>
        <p className='title'>{e.brand}</p>
        <p className='title'>{e.description}</p>
        </div>
        </div>
      )
        })}
        
      </div>
      </>
  )
}
