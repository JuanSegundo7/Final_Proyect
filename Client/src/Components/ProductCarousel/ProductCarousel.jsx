import React, {useRef} from 'react'
import Carousel from 'react-elastic-carousel';
import { Card } from "../Card/Card"
import Error from "../Card/imgs/error.webp";
import "./ProductCarousel.css"


export default function ProductCarousel({array, title}) {
    const carouselRef = useRef();
    let resetTimeout;
  return (
    <section id="Product-carousel">
    <h1>{title}</h1>
    <Carousel itemsToShow={5} enableAutoPlay={true} autoPlaySpeed={2000} ref={carouselRef} onNextEnd={({ index }) => {clearTimeout(resetTimeout); resetTimeout = setTimeout(() => {if (index == carouselRef.current.props.children.length - 5) carouselRef.current.goTo(0);}, 1000)}}>
        {array.length > 0 ? array.map((product) => { 
            return <Card    
            img={
                !product.image || product.image === null
                ? Error
                : product.image.url
            }
            img2={product.image && product.image}
            key={product._id}
            _id={product._id}
            name={product.name}
            origin={product.origin}
            type={product.grinding_type}
            price={product.price}/>
        }) : <h1>Loading..</h1>}
    </Carousel>
    </section>
  )
}
