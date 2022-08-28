import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddCart } from '../AddCart/AddCart'
// import { Des } from '../Des'
import { Home } from '../Home/Home'
import Login from '../Login/Login'
import { BodyCare } from '../Products/BodyCare'
import { Candles } from '../Products/Candles'
import { FallShop } from '../Products/FallShop'
import { Gifts } from '../Products/Gifts'
import { HandSoap } from '../Products/HandSoap'
import { HomeFragrance } from '../Products/HomeFragrance'
import { Mens } from '../Products/Mens'
import { TopOffer } from '../Products/TopOffer'

export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/top' element={<TopOffer />} />
                <Route path='/Gifts' element={<Gifts />} />
                <Route path='/body' element={<BodyCare />} />
                <Route path='/candles' element={<Candles />} />
                <Route path='/homefra' element={<HomeFragrance />} />
                <Route path='/hand' element={<HandSoap />} />
                <Route path='/login' element={<Login />} />
                <Route path='/fall' element={<FallShop />} />
                <Route path='/mens' element={<Mens />} />
                <Route path='/cart' element={<AddCart />} />
                {/* <Route path="/Des/:id" element={<Des />} /> */}
            </Routes>
        </div>
    )
}
