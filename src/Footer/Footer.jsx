import React from 'react'
import "./Footer.css"
export const Footer = () => {
    return (
        <div id='footer'>

            <div id='in'>
                <>
                    <p>Get email offers & the latest news from Bath & Body Works!</p>
                </>
                <div id='in1'>
                    <label>Enter Email</label><br />
                    <input id='Email_in' />
                </div>
                <div id='in2'>
                    <label>Confrim Email</label><br />
                    <input id='Email_in' />
                    <button className='shop_btn'>SUBMIT</button>
                </div>
                <p>Get Connected</p>
                <div id='get_logo'>
                    <a href='https://www.facebook.com/'><img src="https://banner2.cleanpng.com/20180127/dzw/kisspng-facebook-waikato-racing-club-inc-social-media-shar-f-icon-5a6d37c487b7f6.6418278915171071405559.jpg" alt="FB" /></a>
                    <a href='https://twitter.com/login'>  <img src="https://www.pinclipart.com/picdir/middle/176-1768741_facebook-twitter-line-instagram-twitter-icon-png-clipart.png" alt="Twitter" /></a>
                    <a href="https://www.instagram.com/accounts/login/">  <img src="http://swchi.org/wp-content/uploads/2019/09/349-3493616_instagram-circle-logo-transparent-hd-png-download.jpg" alt="Insta" /></a>
                    <a href="https://www.instagram.com/accounts/login/">  <img src="https://w7.pngwing.com/pngs/396/246/png-transparent-logo-tik-tok.png" alt="TikTok" /></a>
                    <a href="https://www.youtube.com/">   <img src="https://w7.pngwing.com/pngs/875/955/png-transparent-youtube-logo-computer-icons-kaba-text-trademark-logo.png" alt="YouTube" /></a>
                    <a href="https://in.pinterest.com/">   <img src="https://w7.pngwing.com/pngs/56/300/png-transparent-logo-pinterest-computer-icons-symbol-miscellaneous-text-trademark.png" alt="Pin" /></a>
                </div>
            </div>

            <div id='about'>
                <div>
                    <h4>TOMER CARE</h4>
                    <p> Help & FAQs</p>
                    <p>Shipping</p>
                    <p>Returns & Exchanges</p>
                    <p>Order Tracking</p>
                    <p>Corporate Sales & Gifts</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <h4>MY ACCOUNT</h4>
                    <p>Sign In or Sign Up</p>
                    <p>Order Tracking</p>
                    <p>My Auto Refresh</p>
                    <p>My Love-It List</p>
                </div>
                <div>
                    <h4>DISCOVER</h4>
                    <p> About Us</p>
                    <p> Careers</p>
                    <p>Gift Cards</p>
                    <p>Shop by Fragrance</p>
                    <p>Product Ingredients</p>
                    <p>Get Inspired</p>
                    <p>Diversity, Equity & Inclusion</p>
                </div>
                <div>
                    <h4>FIND US</h4>
                    <p>Store Locator</p>
                    <p>Global Locations</p>
                    <img id='last' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0c8e6af7/images/evergreen/Happiness_Guaranteedtimes2_v2.jpg?yocs=o_s_' alt='last' />
                </div>

            </div>


        </div>
    )
}


