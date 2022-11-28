import React, {useRef} from 'react'
import Carousel from 'react-elastic-carousel';
import { Card } from "./CardComments"
import "../ProductCarousel/ProductCarousel.css"


export default function Comments({array, title}) {

    //console.log(array)
    const commentsRef = useRef();
    let resetTimeout;

    return (
    <section id="Product-carousel-comments">
    <h1>{title}</h1>
    <Carousel itemsToShow={1} enableAutoPlay={true} autoPlaySpeed={5000} showArrows={false} ref={commentsRef} onNextEnd={({ index }) => {clearTimeout(resetTimeout); resetTimeout = setTimeout(() => {if (index == commentsRef.current.props.children.length - 1) commentsRef.current.goTo(0);}, 1000)}}>
        {array.length > 0 ? array.map((product) => { 
            return <Card    
            key={product._id}
            id={product._id}
            comment={product.content}
            user={product.user}/>
        }) : <h1>Loading..</h1>}
    </Carousel>
    </section>
  )
}
