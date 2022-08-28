import React from 'react'
import { BodyCare } from './BodyCare'
import { Candles } from './Candles'
import { FallShop } from './FallShop'
import { HandSoap } from './HandSoap'
import { HomeFragrance } from './HomeFragrance'
import { Mens } from './Mens'

export const TopOffer = () => {
    return (
        <div>
            <BodyCare />
            <HandSoap />
            <FallShop />
            <Candles />
            <HomeFragrance />
            <Mens />
        </div>
    )
}
