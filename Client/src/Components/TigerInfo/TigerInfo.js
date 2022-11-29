import React from "react";
import "./TigerInfo.css";
import Coffee from "./imgs/coffeeGrain.png";
import Machine from "./imgs/coffeeMaker.png";
import Delivery from "./imgs/delivery.png";
import Home from "./imgs/home.png";

export default function TigerInfo() {
  return (
    <article id="TigerInfo">
      <div id="tiger_left_side">
        <h1>Tiger coffee</h1>
        <p>
          Tiger coffee is a project that was designed and thought exclusively
          for you, coffee lovers. We hope you like our page and especially our
          products, you can leave us feedback once the purchase is made so you
          help us grow and find the best quality products for you.
        </p>
      </div>
      <div id="tiger_right_side">
        <div>
          <img src={Coffee} />
          <h2>Grains</h2>
          <p>
            In tiger coffee you will find all kinds of beans and the best
            quality, from all over the world
          </p>
        </div>
        <div>
          <img src={Machine} />
          <h2>Coffee Maker</h2>
          <p>
            In addition to quality we have the coffee makers that you like the
            most
          </p>
        </div>
        <div>
          <img src={Home} />
          <h2>Tiger coffee</h2>
          <p>In our local you can find incredible discounts!</p>
        </div>
        <div>
          <img src={Delivery} />
          <h2>Shipping</h2>
          <p>
            Do not go looking for your coffee, we will bring it to you in less
            than 24 hours
          </p>
        </div>
      </div>
    </article>
  );
}
