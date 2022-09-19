import React from 'react'
 import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer>
            <div class="first">
                <h4>Hekto</h4>
                <form><input  class="mail"type="email"placeholder="Enter Email Address"/><input class="sign"type="button"value="Sign Up"/></form>
                <p>Contact Info</p>
                <p className="address">17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
            <div className="second">
                <p className="heading">Categories</p>
                <a className="foot" href="./"><p>Laptops and Computers</p></a>
                <a className="foot" href="./"><p>Cameras and Photography</p></a>
                <a className="foot"href="./"><p>Smart Phones and Tablets</p></a>
                <a className="foot" href="./"><p>Video Games and Consoles</p></a>
                <a className="foot"href="./"><p>Waterproof Headphones</p></a>
            </div>
            <div class="third">
                <p className="heading">Customer Care</p>
                <a className="foot" href="./"><p>My Account</p></a>
                <a className="foot"href="./"><p>Discount</p></a>
                <a className="foot"href="./"><p>Return</p></a>
                <a className="foot"href="./"><p>Orders History</p></a>
                <a className="foot"href="./"><p>Orders Tracking</p></a>
            </div>
            <div class="fourth">
                <p className="heading">Pages</p>
                <a className="foot"href="./"><p>Blog</p></a>
                <a className="foot"href="./"><p>Browse the Shop</p></a>
                <a className="foot"href="./"><p>Category</p></a>
                <a className="foot"href="./"><p>Visual Composer Elements</p></a>
                <a className="foot"href="./"><p>WooCommerce Pages</p></a>
            </div>
        </footer>
    </div>
  )
}

export default Footer