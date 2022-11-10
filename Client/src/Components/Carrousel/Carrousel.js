import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "./imgs/coffee_1.jpg"
import Image2 from "./imgs/coffee_2.jpg";
import Image3 from "./imgs/coffee_3.jpg";

export default function Carrousel() {
  return (
    <Carousel autoPlay={true} interval={2000} infiniteLoop={true} autoFocus={true} showThumbs={false} showStatus={false}>
        <div>
            <img src={Image1} />
        </div>
        <div>
            <img src={Image2} />
        </div>
        <div>
            <img src={Image3} />
        </div>
    </Carousel>
  )
}
