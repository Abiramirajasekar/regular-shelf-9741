
// import { Link } from '@chakra-ui/react'
import React from 'react'
import "./Navbar.css"
export const Navbar = () => {
    return (
        <div>
            {/* <>
                <Link to="/">Home</Link>
            </> */}
            <div>
                <img src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwd76d640f/images/svg-icons/Logos-main.svg?yocs=o_s_' alt="BB" />
            <input id='search' />
            </div>
            <div id='cata'>
                <p>Top Offer</p>
                <p>Body Care</p>
                <p>Candles</p>
                <p>Home Fragrance</p>
                <p>Hand Soaps & Sanitizers</p>
                <p>Men's</p>
                <p>Gift</p>
                <p>Fall Shop</p>
            </div>
            <div>
                <img id='poster' src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwf233e544/images/Fall2022/625sw_fa1_xbxl-16x9.jpg?yocs=s_' alt='poster'/>
            </div>
        </div>
    )
}