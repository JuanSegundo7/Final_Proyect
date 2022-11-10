import React from 'react'
import "./TigerInfo.css"
import Coffee from "./imgs/coffeeGrain.png"
import Machine from "./imgs/coffeeMaker.png"
import Delivery from "./imgs/delivery.png"
import Home from "./imgs/home.png"

export default function TigerInfo() {
  return (
    <article id="TigerInfo">
        <div id="tiger_left_side">
            <h1>Tiger coffee</h1>
            <p>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip  </p>
        </div>
        <div id="tiger_right_side">
            <div>
                <img src={Coffee}/>
                <h2>Grains</h2>
                <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
            </div>
            <div>
                <img src={Machine}/>
                <h2>Coffee Maker</h2>
                <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
            </div>
            <div>
                <img src={Home}/>
                <h2>Tiger coffee</h2>
                <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
            </div>
            <div>
                <img src={Delivery}/>
                <h2>Shipping</h2>
                <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
            </div>
        </div>
    </article>
  )
}
