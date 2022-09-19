 import React from 'react'
 import './Header.css'
 import email from "../../homepage_asset/email.png";
 import call from "../../homepage_asset/call.png";
 import profile from "../../homepage_asset/profile.png";
 import white_love from "../../homepage_asset/white_love.png";
 import white_basket from "../../homepage_asset/white_basket.png";
 
 const Header = () => {
   return (
    <div>
        <header>
           <div className= "header-1">
                <div class="contact">
                    <div class="mail">
                        <p><img src={email} alt="email-icon"/> mhhasanul@gmail.com</p>
                    </div>
                    <div class="number">
                        <p><img src= {call} alt="number-icon"/> (12345)67890</p>
                    </div>
                </div>
                <div class="profile">
                    <div class="lang">
                        <select name="language" id="language">
                            <option value="English">English</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Japanese">Japanese</option>
                            <option value="French">French</option>
                            <option value="Indonesia">Indonesian</option>
                            <option value="Arabic">Arabic</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Portuguese">Portuguese</option>
                            <option value="Dutch">Dutch</option>
                        </select>
                    </div>
                </div>
                <div class="usd">
                    <select name="currency" id="currency">
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="NGN">NGN</option>
                        <option value="EUR">EUR</option>
                        <option value="CAD">CAD</option>
                        <option value="AUD">AUD</option>
                        <option value="JPY">JPY</option>
                        <option value="CHF">CHF</option>
                        <option value="NZD">NZD</option>
                    </select>
                </div>
                <div class="login">
                    <p>Login<img src={profile} alt=""/></p>
                </div>
                <div class="wish">
                    <p>Wishlist <img src= {white_love} alt=""/></p>
                </div>
                <div class="basket">
                    <img src={white_basket} alt=""/>
                </div>
            </div>
            <div class="header-2">
                <div class="logo">
                    <a href="index.html"><h3>Hekto</h3></a>
                </div>
                <ul class="navbar">
                    <li><a href="./">   
                         <select class="homeDrownup" name="" id="">
                            <option value=""><a href="./">Home</a></option>
                            <option value=""><a href="./">shopping Cart</a></option>
                            <option value=""><a href="./">About us</a></option>
                            <option value=""><a href="./">Discount item</a></option>
                           </select>
                 </a> 
                    </li>
                    <li><a href="./">Pages</a></li>
                    <li><a href="./">Product</a></li>
                    <li><a href="./">Blog</a></li>
                    <li><a href="./">Shop</a></li>
                    <li><a href="./">Contact</a></li>
                </ul>
                <form class="example" action="/action_page.php">
                    <input type="text" placeholder="" name="search"/>
                    <button class="fa" type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
             <div id="sidenav">
                <div class="nav">
                    <ul>
                        <li class="nav-item"><a href="" class="nav-link">Home</a></li>
                        <li class="nav-item"><a href="" class="nav-link">Pages</a></li>
                        <li class="nav-item"><a href="" class="nav-link">Products</a></li>
                        <li class="nav-item"><a href="" class="nav-link">Blog</a></li>
                        <li class="nav-item"><a href="" class="nav-link">Shop </a></li>
                        <li class="nav-item"><a href="" class="nav-reg">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
   )
 }
 
 export default Header