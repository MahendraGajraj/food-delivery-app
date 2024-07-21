import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src="/gajraj.png" alt="" className='image'/>
                    <h3 className='trail-service'>Note:-Trial Service for 60 days Free.</h3>
                    <p>We provides All type of websites:- Security servies, Food delivery, Clothing Soap, 
                    Vehical Repairing, Veg Soap, Sweet Soap, 
                    Mobile Servicing and much more as per your business requirement. Grow your business with Gajraj Technicals. </p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                    <li>Mobile -07014083519</li>
                    <li>contact@Gajraj.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>
            Copyright 2024 © Gajraj.com- All Right Reserved.
            </p>
        </div>
    )
}

export default Footer