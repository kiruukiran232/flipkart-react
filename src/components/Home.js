import React from 'react'
import '../bootstrap/bootstrap.css'
import flipkart from '../images/flkipkart.jpg'

export default function Nav() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-info bg-white">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
    <a className="navbar-brand logo" href="#"><img className='vimg' src={flipkart} /></a>
    
    <form className="form-inline my-2 my-lg-0 fm-w">
      <input className="form-control mr-sm-2" type="search" placeholder="Search for the products, Brands and more" aria-label="Search" />
    </form>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    <li className="nav-item active">
        <a className="nav-link fa fa-house" href="#"><span className="desktop">Home </span></a>
      </li>
      <li className="nav-item  ">
        <a className="nav-link fa fa-shop" href="#"><span className="desktop">Become a seller </span></a>
      </li>
      <li className="nav-item  ">
        <a className="nav-link fa fa-user" href="#"> <span className="desktop">Sign in</span></a>
      </li>
      <li className="nav-item  ">
        <a className="nav-link fa fa-cart-shopping" href="#"> <span className="desktop">Cart</span></a>
      </li>
      <li className="nav-item  ">
        <a className="nav-link fa fa-ellipsis-vertical" href="#"> <span className="desktop"></span></a>
      </li>
     
      
    </ul>
  </div>
</nav>
    </>
  )
}