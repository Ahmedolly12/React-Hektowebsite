import React from 'react'
 import {Link} from 'react-router-dom'
import './About.css'
import client1 from '../../about_asset/client1.png'
import delivery from '../../about_asset/delivery.png'
import cashback from '../../about_asset/cashback.png'
import medal from '../../about_asset/medal.png'
import t247 from '../../about_asset/t247.png'
import c1 from '../../about_asset/c1.png'
import c2 from '../../about_asset/c2.png'
import c3 from '../../about_asset/c3.png'
import rec from '../../about_asset/rec.png'
import rec1 from '../../about_asset/rec1.png'
// import close from '../../about_asset/close.png'
// import menu from '../../about_asset/menu.png'
const About = () => {
  return (
    <div>
        <div class="about-us">
            <h3>About Us</h3>
            <div class="nav">
                <a href="./">Home .</a>
                <a href="./">Pages .</a>
                <Link to ="ContactUs">Contact Us</Link>
            </div>
        </div>
        <div class="ecommerce">
            <div class="ecommerce-img"><img src={client1}/></div>
            <div class="ecommerce-text">
                <h3>Know About Our E-commerce Business, History</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                <button class="contact">Contact us</button>
            </div>
        </div>
        <div class="features-section">
            <h3>Our Features</h3>
            <div class="features-container">
                <div class="delivery">
                    <img src={delivery}/>
                    <p class="free">Free Delivery</p>
                    <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                <div class="delivery border">
                    <img src={cashback}/>
                    <p class="free">100% Cash Back</p>
                    <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                <div class="delivery">
                    <img src={medal}/>
                    <p class="free">Quality Product</p>
                    <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                <div class="delivery">
                    <img src={t247}/>
                    <p class="free">24/7 Support</p>
                    <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
            </div>
        </div>
        <div class="testimonial-section">
            <h3>Our Client Say!</h3>
            <div class="client">
                <img src={c1}/>
                <img class="indian" src={c2}/>
                <img src={c3}/>
            </div>
            <p class="selina">Selina Gomez</p>
            <p class="web">Ceo At Webecy Digital</p>
            <div class="ipsum">
                <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
            </div>
            <div class="carousel">
                <img src={rec}/>
                <img src={rec1}/>
                <img src={rec}/>
            </div>
        </div>
    </div>

     
  )
}

export default About