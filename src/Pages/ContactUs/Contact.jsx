import React from 'react'
import './Contact.css'
import s1 from '../../contact_asset/s1.png';
import s2 from '../../contact_asset/s2.png';
import s3 from '../../contact_asset/s3.png';
import customer_care from '../../contact_asset/customer_care.png';

const Contact = () => {
  return (
    <div>
        <div class="contact-us">
            <h3>Contact Us</h3>
            <div class="nav">
                <a href="#">Home .</a>
                <a href="#">Pages .</a>
                <a class="about" href="about.html">About Us</a>
            </div>
        </div>
        <div class="section-1">
            <div class="information">
                <h4>Information About Us</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada 
                sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae 
                lobortis quis bibendum quam.</p>
                <div class="carousel">
                    <img src={s1}/>
                    <img src={s2}/>
                    <img src={s3}/>
                </div>
            </div>
            <div class="contact-way">
                <h4>Contact Way</h4>
                <div class="column">
                    <div class="first-column">
                        <div class="firstdetails">
                             <div class="purple"></div>
                            <div class="phone">
                                <p> Tel: 877-67-88-99</p>
                                <p> E-mail: shop@store.com</p>
                            </div>
                        </div>
                        <div class="secondetails">
                            <div class="yellow"></div>
                            <div class="phone">
                                <p> 20 Margaret st, London</p>
                                <p> Great britain, 3NM98-LK</p>
                            </div>
                        </div>
                    </div>
                    <div class="second-column">
                        
                        <div class="firstdetails">
                            <div class="pink"></div>
                            <div class="phone">
                                <p>Support Forum</p>
                                <p> For over 24hr</p>
                            </div>
                        </div>
                        <div class="secondetails">
                           <div class="green"></div>
                            <div class="phone">
                                <p> Free standard shipping</p>
                                <p> on all orders.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div class="section-2">
            <div class="form-section">
                <h4>Get In Touch</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                <form id="form" class="form-to-fill" action="#" name="myForm" onsubmit="return validateForm()"method="post">
                    <label for="Name">
                        <input class="name"type="text" placeholder="Your Name" name="firstname"/>
                        <input class="email"type="email" placeholder="Email" name="email"/>
                    </label>
                    <br></br>
                    <label for="Subject">
                        <input class="subject" type="text"placeholder="Subject" name="subject"/>
                    </label>
                    <br></br>
                    <textarea name="textarea" id="textarea" cols="30" rows="10"placeholder="Type your Message here..."></textarea>
                    <br></br>
                    <input type="Submit"value="Send Mail"name="submit"/>
                </form>
            </div>
            <div class="image-section">
                <img src={customer_care} width=""/>
            </div>
        </div>
    </div>
  )
}

export default Contact