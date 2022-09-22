import React from 'react'
import './Home.css'
import lamp from "../../homepage_asset/lamp.png";
import Ellipse from "../../homepage_asset/Ellipse.png";
import sofa from "../../homepage_asset/sofa.png";
import chair1 from "../../homepage_asset/chair1.png";
import carousel from "../../homepage_asset/carousel.png";
import chair2 from "../../homepage_asset/chair2.png";
import chair3 from "../../homepage_asset/chair3.png";
import chair4 from "../../homepage_asset/chair4.png";
import chair5 from "../../homepage_asset/chair5.png";
import chair6 from "../../homepage_asset/chair6.png";
import chair7 from "../../homepage_asset/chair7.png";
import chair8 from "../../homepage_asset/chair8.png";
import chair9 from "../../homepage_asset/chair9.png";
import chair10 from "../../homepage_asset/chair10.png";
import delivery from "../../homepage_asset/delivery.png";
import cashback from "../../homepage_asset/cashback.png";
import medal from "../../homepage_asset/medal.png";
import t247 from "../../homepage_asset/t247.png";
import sofa2 from "../../homepage_asset/sofa2.png";
import pink from "../../homepage_asset/pink.png";
import blue from "../../homepage_asset/blue.png";
import green from "../../homepage_asset/green.png";
import chair11 from "../../homepage_asset/chair11.png";
import chair12 from "../../homepage_asset/chair12.png";
import chair13 from "../../homepage_asset/chair13.png";
import chair14 from "../../homepage_asset/chair14.png";
import clock from "../../homepage_asset/clock.png";
import shelve from "../../homepage_asset/shelve.png";
import mini1 from "../../homepage_asset/mini1.png";
import mini2 from "../../homepage_asset/mini2.png";
import mini3 from "../../homepage_asset/mini3.png";
import tick from "../../homepage_asset/tick.png";
import sofa3 from "../../homepage_asset/sofa3.png";
import purpleBackground from "../../homepage_asset/purpleBackground.png";
import top1 from "../../homepage_asset/top1.png";
import top2 from "../../homepage_asset/top2.png";
import top3 from "../../homepage_asset/top3.png";
import rectangularbackground from "../../homepage_asset/rectangularbackground.png";
import image1174 from "../../homepage_asset/image1174.png";
import blog1 from "../../homepage_asset/blog1.png";
import blog2 from "../../homepage_asset/blog2.png";
import blog3 from "../../homepage_asset/blog3.png";
import pen from "../../homepage_asset/pen.png";
import calendar from "../../homepage_asset/calendar.png";


const Home = () => {
    
  return (
    <div>
        <div className="hero-section">
            <div class="lamp">
                <img src={lamp} alt=""/>
                <img className="Ellipse"src={Ellipse} alt=""/>
            </div>
            <div class="hero-text">
                <div className="paragraph">
                    <p>Best Furniture For Your Castle....</p>
                </div>
                <div className="heading">
                    <h1>New Furniture Collection Trends in 2020</h1>
                </div>
                <div className="small-paagraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna 
                    in est adipiscing in phasellus non in justo.</p>
                    <div className="shop">
                        <button type="submit">Shop Now</button>
                    </div>
                </div>
            </div>
            
            <div className="sofa">
                <img src={sofa} width="100%" height="90%" alt=""/>
            </div>
        </div> 
        <div className="feature-product">
            <div className="feature">
                <h3>Featured Products</h3>
                <div className="section-1">
                    <div className="chair1">
                        <div className="chair1-background">
                            <img src={chair1} alt=""/>
                        </div>
                        <div className="cant">
                            <p>Cantilever chair</p>
                        </div>
                        <div className="carousel">
                            <img src={carousel} alt=""/>
                        </div>
                        <div className="code">
                            <p>Code - Y523201</p>
                            <p>$42.00</p>
                        </div>
                    </div>
                    <div className="chair2">
                        <div className="chair1-background">
                            <img src={chair2}width="120%" alt="%"/>
                        </div>
                        <div className="blue-background">
                            <div className="cant">
                                <p>Cantilever chair</p>
                            </div>
                        </div>
                        <div className="carousel">
                            <img src={carousel} alt=""/>
                        </div>
                        <div className="code">
                            <p>Code - Y523201</p>
                            <p>$42.00</p>
                        </div>
                    </div>
                    
                    <div className="chair3">
                        <div className="chair1-background">
                            <img src={chair3} alt=""/>
                        </div>
                        <div className="cant">
                            <p>Cantilever chair</p>
                        </div>
                        <div className="carousel">
                            <img src={carousel} alt=""/>
                        </div>
                        <div clasNames="code">
                            <p>Code - Y523201</p>
                            <p>$42.00</p>
                        </div>
                    </div>
                    <div className="chair4">
                        <div className="chair1-background">
                            <img src={chair4}width="115%" alt=""/>
                        </div>
                        <div className="cant">
                            <p>Cantilever chair</p>
                        </div>
                        <div className="code">
                            <p>Code - Y523201</p>
                            <p>$42.00</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div class="latest">
            <h3>Latest Products</h3>
            <ul className="small-nav">
                <li><a href="./"><span class="new">New Arrival</span></a></li>
                <li><a href="./">Best Seller</a></li>
                <li><a href="./">Featured</a></li>
                <li><a href="./">Special Offer</a></li>
            </ul>
        </div>
        <div class="section-2">
                <div class="chair5">
                    <img src= {chair5}width="110%" alt=""/>
                    <div class="comfort">
                        <div class="name">
                            <p>Comfort Handy Craft</p>
                        </div>
                        <div class="price">
                        <p> $42.00 <span class="strike">  $65.00</span></p>
                  </div>        
                </div>
                </div>
                <div class="chair6">
                    <img src={chair6} width="%" height="" alt=""/>
                    <div class="comfort">
                        <div class="name">
                            <p>Comfort Handy Craft</p>
                        </div>
                        <div class="price">
                        <p> $42.00 <span class="strike">  $65.00</span></p>
                  </div>        
                </div>
                </div>
                <div class="chair7">
                        <img src={chair7}width="130%" alt=""/>
                         <div class="comfort">
                         <div class="name">
                            <p>Comfort Handy Craft</p>
                        </div>
                        <div class="price">
                            <p> $42.00 <span class="strike">  $65.00</span></p> 
                        </div>        
                    </div>
                </div>
            </div>
        <div class="section-3">
            <div class="chair8">
                <img src={chair8}width="" alt=""/>
                <div class="comfort">
                    <div class="name">
                        <p>Comfort Handy Craft</p>
                    </div>
                    <div class="price">
                        <p> $42.00 <span class="strike">  $65.00</span></p>
                    </div> 
                </div>       
            </div>
            <div class="chair9">
                <img src={chair9} width="120%" alt=""/>
                <div class="comfort">
                    <div class="name">
                        <p>Comfort Handy Craft</p>
                    </div>
                    <div class="price">
                        <p> $42.00 <span class="strike">  $65.00</span></p>
                    </div>        
                </div>
            </div>
            <div class="chair10">
                <img src={chair10}width="100%" alt=""/>
                <div class="comfort">
                    <div class="name">
                        <p>Comfort Handy Craft</p>
                    </div>
                    <div class="price">
                        <p> $42.00 <span class="strike">  $65.00</span></p>
                  </div>        
                </div>
            </div>
        </div>
        <div class="section-4">
            <div class="offer">
                <h3>What Shopex Offer!</h3>
                <div class="support">
                    <div class="delivery">
                        <img src={delivery} alt=""/>
                        <p class="sup">24/7 Support</p>
                        <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div class="hand">
                        <img src={cashback} alt=""/>
                        <p class="sup">24/7 Support</p>
                        <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div class="medal">
                        <img src={medal} alt=""/>
                        <p class="sup">24/7 Support</p>
                        <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div class="call">
                        <img src={t247} alt= ""/>
                        <p class="sup">24/7 Support</p>
                        <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-5">
            <div class="sofa-2">
                <img src={sofa2}width="80%"alt=""/>
            </div>
            <div class="text-unique">
                <div class="unique">
                    <h4>Unique Features of latest and Trending Products</h4>
                </div>
                <div class="paragraph">
                    <div class="text-1">
                        <p class=""><img src={pink} alt=""/>      All frames constructed with hardwood solids and laminates</p>
                        <p class="para"><img src={blue} alt =""/> Reinforced with double wood dowels, glue, screw - nails corner    
                                blocks and machine nails</p> 
                        <p class=""><img src={green} alt=""/> All frames constructed with hardwood solids and laminates</p>
                    </div>
                    <div class="cart">
                        <button class="Add">Add to cart</button>
                        <div class="italian">
                            <p>B and B Italian Sofa</p>
                            <p class="thin">$32.00</p>
                        </div>       
                    </div>
                </div>
            </div>
        </div>
        <div class="trending-product">
            <div class="trending">
            <h3>Trending Products</h3>
            <div class="trending-chair">
                <div class="chair11">
                    <div class="chair11b">
                        <img src={chair11} alt=""/>
                    </div>
                    <div class="chair-text">
                        <p class="lever">Cantilever chair</p>
                        <p class="twenty">$26.00  <span class="doll">$42.00</span></p>
                    </div>
                </div>
                <div class="chair12">
                    <div class="chair11b">
                        <img src={chair12} alt=""/>
                    </div>
                    <div class="chair-text">
                        <p class="lever">Cantilever chair</p>
                        <p class="twenty">$26.00  <span class="doll">$42.00</span></p>
                    </div>
                </div>
                <div class="chair13">
                    <div class="chair11b">
                        <img src={chair13} alt=""/>
                    </div>
                    <div class="chair-text">
                        <p class="lever">Cantilever chair</p>
                        <p class="twenty">$26.00  <span class="doll">$42.00</span></p>
                    </div>
                </div>
                <div class="chair14">
                    <div class="chair11b">
                        <img src={chair14} alt=""/>
                    </div>
                    <div class="chair-text">
                        <p class="lever">Cantilever chair</p>
                        <p class="twenty">$26.00  <span class="doll">$42.00</span></p>
                    </div>
                </div>
            </div>
            <div class="percentage">
                    <div class="off">
                        <p class="product">23% off in all products</p>
                        <a class="shop"href="#">Shop Now</a>
                        <img class="black" src={clock} alt=""/>
                    </div>
                    <div class="off-2">
                        <p class="product">23% off in all products</p>
                        <a class="shop"href="#">View Collection</a>
                        <img class="black" src={shelve} alt=""/>
                    </div>
                    <div class="mini-chair">
                        <div class="executive-1">
                            <img src={mini1} alt=""/>
                        </div>
                        <div class="executive-1">
                            <img src={mini2} alt=""/>
                        </div>
                        <div class="executive-1">
                            <img src={mini3}alt=""/>
                        </div>
                    </div> 
                    <div class="executive">
                        <div class="seat-1">
                            <div class="seat">
                                <p class="Seat">Executive Seat chair </p>
                            </div>
                            <div class="price">
                                <p class="line">$32.00</p>
                            </div>
                        </div>
                        <div class="seat-1">
                            <div class="seat">
                                <p class="Seat">Executive Seat chair </p>
                            </div>
                            <div class="price">
                                <p class="line">$32.00</p>
                            </div>
                         </div>
                        <div class="seat-1">
                            <div class="seat">
                                <p class="Seat">Executive Seat chair </p>
                            </div>
                            <div class="price">
                                <p class="line">$32.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                  <h4 class="discount">Discount Item</h4>
                <div class="latests">
                    <ul class="small-nav">
                        <li><a href="#"><span class="new">Wood Chair</span></a></li>
                        <li><a href="#">Plastic Chair</a></li>
                        <li><a href="#">Sofa Collection</a></li>
                    </ul>
                </div>
            </div>  
        </div>
        <div class="discount">
            <div class="discount-text">
                <h4 class="all">20% Discount Of All Products</h4>
                <p class="compact">Eams Sofa Compact</p>
                 <p class="ipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                <div class="tick">
                    <div class="tick-1">
                        <p><img src={tick}/> Material expose like metals</p>
                        <p><img src={tick}/> Simple neutral colours.</p>
                 </div>
                    <div class="tick-2">
                        <p><img src={tick}/> Clear lines and geomatric figures</p>
                        <p><img src={tick}/> Material expose like metals</p>
                    </div>
                </div>
            </div>
            <div class="discount-image">
                <img src={sofa3}width="100%"/>
            </div>
        </div>
        <div class="sho">
            <form action="">
                <button class="shop-now" type="submit">Shop Now</button>
            </form>
        </div>
    <div class="top-categories">
            <h3>Top Categories</h3>
            <div class="top">
                <div class="top-1">
                    <img src={purpleBackground}/>
                    <img src={top1}width= "220%"/>
                    <p>Mini LCW Chair</p>
                    <p>$56.00</p>
                </div>
                                
                <div class="top-2">
                    <img src={top2}width="150%"/>
                </div>
                <div class="top-3">
                    <img src={top3} width="150%"/>
                </div>
                <div class="top-4">
                    <img src={top1}width="130%"/>
                </div>
            </div>
                    
            <div class="chair-price">
                <div class="price-1">
                    <p>Mini LCW Chair</p>
                    <p>$56.00</p>
                </div>
                <div class="price-1">
                    <p>Mini LCW Chair</p>
                    <p>$56.00</p>
                </div>
                <div class="price-1">
                    <p>Mini LCW Chair</p>
                    <p>$56.00</p>
                </div>
                <div class="price-1">
                    <p>Mini LCW Chair</p>
                    <p>$56.00</p>
                </div>
            </div>
        </div>
    <div class="image-container">
        <img src={rectangularbackground}/>
        <div class="center-text">Get Latest Update By Subscribe Our Newslater</div>
            <div class="shop"><form action="">
                    <button class="sn" type="submit">Shop Now</button>
                </form>
            </div>
        </div>
    <div class="logo-container">
        <div class="logo">
            <img src={image1174}/>
        </div>
    </div>
    <div class="section-6">
        <h3>Latest Blog</h3>
        <div class="blog">
            <div class="blog-1"> <img class="wall" src={blog1}/>
                <div class="blog-text">
                    <p><img src={pen}/> SaberAli</p>
                    <p><img src={calendar}/> 21 August,2020</p>
                </div>
                <div class="para-text">
                    <p class="trend">Top esssential Trends in 2021</p>
                    <p class="more">More off this less hello samlande lied much</p>
                    <p class="more">over tightly circa horse taped mightly</p>
                    <p><a href="#">Readmore</a></p>
                </div>
            </div>
            <div class="blog-2"><img class="wall" src={blog2}/>
                <div class="blog-text">
                    <p><img src={pen}/> Surfauxion</p>
                    <p><img src={calendar}/> 21 August,2020</p>
                </div>
                <div class="para-text">
                    <p class="trend">Top esssential Trends in 2021</p>
                    <p class="more">More off this less hello samlande lied much</p>
                    <p class="more">over tightly circa horse taped mightly</p>
                    <p><a class=""href="#">Readmore</a></p>
                </div>
            </div>
            <div class="blog-3"><img class="wall" src={blog3}/>
                <div class="blog-text">
                    <p><img src={pen}/> SaberAli</p>
                    <p><img src={calendar}/> 21 August,2020</p>
                </div>
                <div class="para-text">
                    <p class="trend">Top esssential Trends in 2021</p>
                    <p class="more">More off this less hello samlande lied much</p>
                    <p class="more">over tightly circa horse taped mightly</p>
                    <p><a href="#">Readmore</a></p>
                </div>
            </div>
        </div>    
    </div>
    </div>

    
  )
}

export default Home