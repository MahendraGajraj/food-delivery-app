import React, { useContext } from 'react';
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("home")
    const { getTotalCartAmount } = useContext(StoreContext)

    return (
        <>
            <h2 className='gajraj'>GAJRAJ TECHNICALS</h2>
           
            <div className='navbar'>

                <Link to="/"><img src={assets.logo} alt="" className='logo' /></Link>
                <ul className='navbar-menu'>
                    <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                    <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                    <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                    <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
                </ul>
                <div className='navbar-right'>
                    <img src={assets.search_icon} alt="" />
                    <div className='navbar-search-icon'>
                        <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
                        <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                    </div>
                    <button onClick={() => setShowLogin(true)}>sign in</button>
                </div>
            </div>
           
            <p className='explore-menu-text'>We provides All type of websites:- Security servies,
             Food delivery, Clothing Soap, 
            Vehical Repairing, Veg Soap, Sweet Soap, 
            Mobile Servicing and much more as per your business requirement. 
            Grow your business with Gajraj Technicals. </p>
            <br/>
            <h3 className='trail-service'>Note:-Trial Service for 60 days Free.</h3>
        </> 
    )
}

export default Navbar